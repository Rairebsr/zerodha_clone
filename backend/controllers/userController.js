import User from '../model/User.js';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';


const createToken = (userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET)
}
const otpStore = {};  

export const sendOtp = async (req, res) => {
  
    const { phone } = req.body;
    console.log('sendOtp called with phone:', phone);

    if (!phone) return res.status(400).json({ message: 'Phone number is required' });

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    otpStore[phone] = otp;

    console.log('Sending response:', { message: 'OTP sent successfully', otp }); 
    return res.status(200).json({ message: 'OTP sent successfully', otp });


};



export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) return res.status(400).json({ message: 'Phone and OTP required' });

  // Check OTP
  if (otpStore[phone] && otpStore[phone].toString() === otp.toString()) {
    delete otpStore[phone]; // Clear used OTP

    // ✅ Now check DB and create user if needed
    let user = await User.findOne({ phone });

    if (user && user.verified) {
        return res.status(200).json({
            message: 'User already exists for this phone number',
            stepsCompleted: user.stepsCompleted,
            verified: user.verified,
            token,
        });
    }

    if (!user) {
      user = new User({
        phone,
        verified: false,
        userId: uuidv4(),
        stepsCompleted: {
          pan: false,
          aadhaar: false,
          profile: false,
          bank: false,
          webcam: false,
        },
      });
      await user.save();

    }
    

    const token = createToken(user._id)
    return res.status(200).json({
      message: 'OTP verified',
      stepsCompleted: user.stepsCompleted,
      verified: user.verified,
      token,
    });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
};

