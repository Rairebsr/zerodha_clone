import UserWatchlist from "../model/UserWatchlist.js";

export const save = async (req, res) => {
  const { userId, watchlists } = req.body;

  if (!userId || !watchlists || typeof watchlists !== 'object') {
    return res.status(400).json({ error: "Invalid data" });
  }

  const transformed = Object.entries(watchlists).map(([watchlistName, wl]) => ({
    watchlistName,
    groups: Object.entries(wl.groups || {}).map(([groupName, stocks]) => ({
      groupName,
      stocks
    }))
  }));

  try {
    const existing = await UserWatchlist.findOne({ userId });

    if (existing) {
      existing.watchlists = transformed;
      await existing.save();
    } else {
      await UserWatchlist.create({ userId, watchlists: transformed });
    }

    res.json({ message: 'Saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


export const view = async (req, res) => {
  try {
    const {userId} = req.query
    const doc = await UserWatchlist.findOne({  userId });
    res.json(doc || { watchlists: [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch watchlists' });
  }
};
