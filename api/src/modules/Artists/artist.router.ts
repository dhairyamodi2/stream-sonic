import express from 'express';
import { getAll, getArtist } from './artists.controller';


const artistRouter = express.Router();

artistRouter.get('/all', getAll);
artistRouter.get('/:id', getArtist);
export default artistRouter;