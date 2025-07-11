import Orders from "../model/Orders.js";


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
    } = req.body;
    const quantity = parseInt(rawQty);
    const isBuy = req.body?.val !== 'Sell';
    const existingOrder = await Orders.findOne({ userId, stockSymbol });

    // === BUY ===
    if (isBuy) {
      if (existingOrder) {
        // update quantity and optionally average price
        existingOrder.quantity += quantity;
        existingOrder.price = price; // or weighted avg?
        await existingOrder.save();
        return res.status(200).json({ message: 'Buy order updated' });
      } else {
        const newOrder = new Orders(req.body);
        await newOrder.save();
        return res.status(201).json({ message: 'Buy order placed' });
      }
    }

    // === SELL ===
    if (!isBuy) {
      if (!existingOrder) {
        return res.status(400).json({ message: 'You do not own this stock' });
      }

      if (existingOrder.quantity < quantity) {
        return res.status(400).json({ message: 'Cannot sell more than you own' });
      }

      existingOrder.quantity -= quantity;

      if (existingOrder.quantity === 0) {
        await Orders.deleteOne({ _id: existingOrder._id });
        return res.status(200).json({ message: 'Sold entire quantity, record deleted' });
      } else {
        await existingOrder.save();
        return res.status(200).json({ message: 'Sell order processed' });
      }
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
