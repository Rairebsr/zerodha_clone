import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  price: Number,
  change: Number,
  percentChange: Number,
  history: Array
});

const GroupSchema = new mongoose.Schema({
  groupName: String,
  stocks: [StockSchema]
});

const WatchlistSchema = new mongoose.Schema({
  watchlistName: String,
  groups: [GroupSchema]
});

const UserWatchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  watchlists: [WatchlistSchema]
});

export default mongoose.model('UserWatchlist', UserWatchlistSchema);
