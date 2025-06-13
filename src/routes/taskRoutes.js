import express from 'express';
import { createTask,updateTask, deleteTask, getUserTasks } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';
const taskRouter = express.Router();

taskRouter.post('/', protect, createTask);
taskRouter.get('/', protect, getUserTasks);
taskRouter.patch('/:id', protect, updateTask);
taskRouter.delete('/:id', protect, deleteTask);

export default taskRouter;

