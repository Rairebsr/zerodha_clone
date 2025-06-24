import express from 'express';
import { sendOtp,verifyOtp } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/send-otp', sendOtp);
userRouter.post('/verify-otp',verifyOtp)

export default userRouter;
