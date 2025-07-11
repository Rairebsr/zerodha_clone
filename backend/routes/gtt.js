import express from 'express'
import { addgtt } from '../controllers/gttController.js'

const gttrouter = express.Router()

gttrouter.post('/add',addgtt)

export default gttrouter