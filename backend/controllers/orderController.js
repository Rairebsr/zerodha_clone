import Orders from "../model/Orders.js";


export const addOrder = async(req,res) =>{
    try {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    console.error('Order placement error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Orders.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};