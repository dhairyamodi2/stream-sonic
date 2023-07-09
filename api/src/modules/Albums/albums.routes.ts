import express from 'express';
import { authenticate } from '../../middleware';
import { AddTracks, CreateAlbums, getAlbum, getAll } from './albums.controllers';


const albumsRouter = express.Router();


albumsRouter.post("/createalbums", authenticate, CreateAlbums);
albumsRouter.put("/tracks", authenticate, AddTracks);
albumsRouter.get("/all", getAll);
albumsRouter.get("/:id", getAlbum);


export default albumsRouter;