import Task from '../models/task.js';
import sendTaskCreatedEmail from '../utils/sendTaskCreatedEmail.js'; // (we'll add this later)

export const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      user: req.user._id,
    });

    // send email notification (dummy placeholder)
    await sendTaskCreatedEmail(req.user.email, task);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Task creation failed', error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};

//get all tasks for the user

export const getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ dueDate: 1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
};
