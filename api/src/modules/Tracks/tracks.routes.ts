import Express from 'express';
import multer from 'multer';
import { file_uri } from '../../constants';
import { AddTracks, getAllTracks, playTrack } from './tracks.controllers';
import { authenticate } from '../../middleware';
import crypto from 'crypto';

const storage = multer.diskStorage({
    destination: function(req, files, cb) {
        cb(null, file_uri);
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".");
        let extension = "";
        if (ext.length >= 2) {
            extension = ext[1]
        }
        const filename = crypto.randomUUID() +"."+ extension;
        cb(null, filename);
    }
})

const upload = multer({storage})
const trackRouter = Express.Router();


trackRouter.post('/addtrack', upload.single('track'), authenticate,  AddTracks);
trackRouter.get('/play/:id', playTrack);
trackRouter.get('/all', getAllTracks);
export default trackRouter;