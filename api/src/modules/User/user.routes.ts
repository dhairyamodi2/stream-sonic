import express from 'express';

import { authenticate } from '../../middleware';
import { completeProfile, getMe } from './user.controller';

const userRoutes = express.Router();


userRoutes.get('/me', authenticate, getMe);
userRoutes.put("/completeprofile", authenticate, completeProfile);


export default userRoutes;