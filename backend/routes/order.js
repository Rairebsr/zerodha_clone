import express from 'express'
import { addOrder, getOrdersByUser } from '../controllers/orderController.js'


const orderRouter = express.Router()

orderRouter.post('/addorder',addOrder)
orderRouter.get('/getorder/:userId', getOrdersByUser);

export default orderRouter