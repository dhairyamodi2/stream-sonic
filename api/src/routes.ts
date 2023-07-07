import express from 'express';
import { AuthCallback } from './modules/User/Auth/AuthController';


const router = express.Router();


router.get('/google/callback', AuthCallback)


export default router;