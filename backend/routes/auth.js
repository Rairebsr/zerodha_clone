import express from 'express';
import { login, profile, sendOtp,updateprofile,verifyOtp, verifytotp } from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.post('/send-otp', sendOtp);
userRouter.post('/verify-otp',verifyOtp);
userRouter.post('/verify-totp',verifytotp);
userRouter.get('/profile',verifyToken,profile);
userRouter.post('/update-profile', verifyToken,updateprofile); 
userRouter.post('/login',login)

export default userRouter;
