import express from 'express';
import { updateUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.put('/profile', protect, updateUserProfile);

export default userRouter;

