import mongoose from 'mongoose'

const GTTOrderSchema = new mongoose.Schema({
  userId: String,
  stockSymbol: String,
  stockName: String,
  triggerPrice: Number,
  quantity: Number,
  price: Number,
  transactionType: String,
  triggerType: String,
  timestamp: Date
});

export default mongoose.model('Gtt', GTTOrderSchema);
