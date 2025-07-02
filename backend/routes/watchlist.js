import express from 'express'
import { save, view } from '../controllers/watchlistController.js';

const listRouter = express.Router();

listRouter.post('/save',save)
listRouter.get('/view',view)

export default listRouter;