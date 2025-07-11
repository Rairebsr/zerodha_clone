import Gtt from "../model/Gtt.js";

export const addgtt =  async (req, res) => {
  const {
    userId, stockSymbol, stockName, triggerPrice,
    quantity, price, transactionType, triggerType, timestamp
  } = req.body;

  try {
    const gtt = new Gtt({
      userId,
      stockSymbol,
      stockName,
      triggerPrice,
      quantity,
      price,
      transactionType,
      triggerType,
      timestamp
    });

    await gtt.save();
    res.status(201).json({ message: 'GTT Order placed successfully', gtt });
  } catch (err) {
    console.error('GTT Save Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
