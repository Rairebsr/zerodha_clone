import Fund from "../model/Fund.js";

// POST /api/funds/add
export const addFunds = async (req, res) => {
  const { userId, amount, segment } = req.body;

  if (!userId || !amount || !segment) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const segmentKey = segment.toLowerCase(); // 'equity' or 'commodity'

  try {
    const fund = await Fund.findOne({ userId });

    if (!fund) {
      return res.status(404).json({ message: "Fund record not found for user" });
    }

    fund[segmentKey].availableMargin += amount;
    fund[segmentKey].payin += amount;

    await fund.save();

    res.status(200).json({ message: "Funds added successfully", fund });
  } catch (error) {
    console.error("Error adding funds:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// POST /api/funds/withdraw
export const withdrawFunds = async (req, res) => {
  const { userId, amount, segment } = req.body;

  if (!userId || !amount || !segment) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const segmentKey = segment.toLowerCase(); // 'equity' or 'commodity'

  try {
    const fund = await Fund.findOne({ userId });

    if (!fund) {
      return res.status(404).json({ message: "Fund record not found for user" });
    }

    if (fund[segmentKey].availableMargin < amount) {
      return res.status(400).json({ message: "Insufficient funds to withdraw" });
    }

    fund[segmentKey].availableMargin -= amount;
    fund[segmentKey].payout += amount;

    await fund.save();

    res.status(200).json({ message: "Withdrawal successful", fund });
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /api/funds/get/:userId
export const getfund = async (req, res) => {
  try {
    const { userId } = req.params;

    if(!userId){
        console.log("user not found");
        
    }
    const fund = await Fund.findOne({ userId: req.params.userId });
    if (!fund) {
    // Optional: auto-create a default record
    fund = await Fund.create({
      userId,
      equity: { availableMargin: 0, usedMargin: 0, payin: 0, payout: 0 },
      commodity: { availableMargin: 0, usedMargin: 0, payin: 0, payout: 0 },
    });
  }

    res.json({
      equity: fund.equity,
      commodity: fund.commodity
    });
  } catch (err) {
    console.error("Error fetching fund:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};