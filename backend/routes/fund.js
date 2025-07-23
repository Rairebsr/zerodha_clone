import express from 'express';
import { addFunds, getfund, withdrawFunds } from '../controllers/fundController.js';

const fundrouter = express.Router()

fundrouter.post('/add', addFunds);
fundrouter.post('/withdraw', withdrawFunds);
fundrouter.get("/get/:userId",getfund);

export default fundrouter