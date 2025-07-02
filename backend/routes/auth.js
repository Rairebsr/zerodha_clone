import express from 'express';
import { login, sendOtp,verifyOtp, verifytotp } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/send-otp', sendOtp);
userRouter.post('/verify-otp',verifyOtp);
userRouter.post('/verify-totp',verifytotp);
userRouter.post('/login',login)

export default userRouter;
