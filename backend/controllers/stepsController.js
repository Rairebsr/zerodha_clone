import User from '../model/User.js';
import bcrypt from 'bcryptjs'


export const panStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: 'User not found' });

    
    user.panDetails = { panNumber: req.body.pan, dob: req.body.dob };
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

    
    user.aadhaarDetails = { aadhaarNumber: req.body.aadhaar };
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

    
    user.profileDetails = req.body;

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

    
    user.bankDetails = req.body;
    user.stepsCompleted.bank = true;
    await user.save();

    res.status(200).json({ message: 'bank step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const webStep = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    

    user.stepsCompleted.webcam = true;
    await user.save();

    res.status(200).json({ message: 'webcam step completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const checkUserIdExists = async (req, res) => {
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ exists: false });

  const exists = await User.exists({ userId });
  return res.status(200).json({ exists: !!exists });
};

export const finalizeStep = async (req, res) => {
  const { userId, password } = req.body;
  console.log('Finalize Step:', req.body);
  

  if (!userId || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.userId = userId;
    user.password = await bcrypt.hash(password, 10);
    user.verified = true;

    await user.save();
    return res.status(200).json({ message: 'Account finalized successfully' });
  } catch (err) {
    console.error('Finalize error:', err);
    return res.status(500).json({ message: 'Server error during finalization' });
  }
};