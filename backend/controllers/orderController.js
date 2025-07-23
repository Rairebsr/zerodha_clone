import Orders from "../model/Orders.js";
import Fund from "../model/Fund.js"; // import the fund model

export const addOrder = async (req, res) => {
  try {
    const {
      userId,
      stockSymbol,
      stockName,
      price,
      quantity: rawQty,
      stopLoss,
      orderType,
      productType,
      tabType,
      validity,
      disclosedQty,
      timestamp,
      segment,
      exchange
    } = req.body;

    const quantity = parseInt(rawQty);
    const isBuy = req.body?.val !== 'Sell';

    // Find or create fund for user
    let fund = await Fund.findOne({ userId });
    if (!fund) {
      fund = new Fund({ userId });
    }

    // Validate segment (equity or commodity)
    if (!['EQUITY', 'COMMODITY'].includes(segment)) {
      return res.status(400).json({ message: 'Invalid segment' });
    }

    const fundSegment = fund[segment.toLowerCase()];
    const totalPrice = price * quantity;

    // === BUY ORDER ===
    if (isBuy) {
      if (fundSegment.availableMargin < totalPrice) {
        return res.status(400).json({ message: 'Insufficient margin' });
      }

      // Deduct from availableMargin and update usedMargin
      fundSegment.availableMargin -= totalPrice;
      fundSegment.usedMargin += totalPrice;

      const existingOrder = await Orders.findOne({ userId, stockSymbol, segment, exchange });

      if (existingOrder) {
        existingOrder.quantity += quantity;
        existingOrder.price = price; // you may average this
        await existingOrder.save();
      } else {
        const newOrder = new Orders({
          userId,
          stockSymbol,
          stockName,
          price,
          quantity,
          stopLoss,
          orderType,
          productType,
          tabType,
          validity,
          disclosedQty,
          timestamp,
          segment,
          exchange
        });
        await newOrder.save();
      }

      await fund.save();
      return res.status(200).json({ message: 'Buy order processed' });
    }

    // === SELL ORDER ===
    else {
      const existingOrder = await Orders.findOne({ userId, stockSymbol, segment, exchange });

      if (!existingOrder) {
        return res.status(400).json({ message: 'You do not own this stock in this segment' });
      }

      if (existingOrder.quantity < quantity) {
        return res.status(400).json({ message: 'Cannot sell more than you own' });
      }

      existingOrder.quantity -= quantity;

      // Credit margin back
      fundSegment.availableMargin += totalPrice;
      fundSegment.usedMargin = Math.max(0, fundSegment.usedMargin - totalPrice); // avoid negative

      if (existingOrder.quantity === 0) {
        await Orders.deleteOne({ _id: existingOrder._id });
      } else {
        await existingOrder.save();
      }

      await fund.save();
      return res.status(200).json({ message: 'Sell order processed' });
    }

  } catch (err) {
    console.error('Order placement error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Orders.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// GET /api/positions/:userId
export const getposition = async (req, res) => {
  try {
     const { userId } = req.params;
  const positions = await Orders.find({ userId, productType: 'Intraday' });
  res.json(positions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch position" });
  }
 
};



