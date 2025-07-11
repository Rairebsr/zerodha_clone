import express from 'express'
import { addOrder, getOrdersByUser, getposition } from '../controllers/orderController.js'


const orderRouter = express.Router()

orderRouter.post('/addorder',addOrder)
orderRouter.get('/getorder/:userId', getOrdersByUser);
orderRouter.get('/getposition/:userId',getposition)

export default orderRouter