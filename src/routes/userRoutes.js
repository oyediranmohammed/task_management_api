import express from 'express';
import { updateUserProfile, getUserProfile} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.put('/profile', protect, updateUserProfile);
userRouter.get('/profile', protect, getUserProfile);

export default userRouter;

