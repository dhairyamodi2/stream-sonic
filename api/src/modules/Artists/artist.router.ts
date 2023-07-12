import express from 'express';
import { getAll } from './artists.controller';


const artistRouter = express.Router();

artistRouter.get('/all', getAll);
export default artistRouter;