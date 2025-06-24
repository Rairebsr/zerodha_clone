import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { panStep,aadhaarStep, profileStep, bankStep } from '../controllers/stepsController.js';


const stepRouter = express.Router();

stepRouter.post('/pan',verifyToken,panStep)
stepRouter.post('/aadhaar',verifyToken,aadhaarStep)
stepRouter.post('/profile',verifyToken,profileStep)
stepRouter.post('/bank',verifyToken,bankStep)


export default stepRouter;
