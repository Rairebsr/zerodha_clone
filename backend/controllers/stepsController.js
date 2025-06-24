import User from '../model/User.js';


export const panStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    

    user.stepsCompleted.pan = true;
    await user.save();

    res.status(200).json({ message: 'PAN step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const aadhaarStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    

    user.stepsCompleted.aadhaar = true;
    await user.save();

    res.status(200).json({ message: 'Aadhaar step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const profileStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    

    user.stepsCompleted.profile = true;
    await user.save();

    res.status(200).json({ message: 'profile step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const bankStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    

    user.stepsCompleted.bank = true;
    await user.save();

    res.status(200).json({ message: 'bank step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};