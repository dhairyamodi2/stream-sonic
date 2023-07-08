import express from 'express';
import { AuthCallback } from './AuthController';
import { authenticate } from '../../../middleware';

const authRoutes = express.Router();


authRoutes.get('/google/callback',AuthCallback)
authRoutes.get('/me', authenticate);



export default authRoutes;