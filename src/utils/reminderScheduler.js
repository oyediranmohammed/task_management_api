import cron from 'node-cron';
import Task from '../models/taskModel.js';
import { sendEmail } from './emailService.js';
import User from '../models/user.js';

// Run every hour
cron.schedule('0 * * * *', async () => {
  const now = new Date();
  const upcoming = new Date(now.getTime() + 60 * 60 * 1000); // Next 1 hour

  const tasks = await Task.find({
    dueDate: { lte: upcoming,gte: now },
    isCompleted: false
  }).populate('user');

  for (let task of tasks) {
    await sendEmail(
      task.user.email,
      'Upcoming Task Reminder',
      `<p>Reminder: Your task "<strong>${task.title}</strong>" is due soon.</p>`
    );
  }
});
