import nodemailer from 'nodemailer';

const sendTaskCreatedEmail = async (toEmail, task) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use another like "outlook", "yahoo"
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Task Manager" <${process.env.EMAIL_FROM}>`,
      to: toEmail,
      subject: '✅ Task Created Successfully',
      html: `
        <h3>Hi there!</h3>
        <p>You just created a new task:</p>
        <ul>
          <li><strong>Title:</strong> ${task.title}</li>
          <li><strong>Description:</strong> ${task.description || 'N/A'}</li>
          <li><strong>Due Date:</strong> ${task.dueDate ? new Date(task.dueDate).toLocaleString() : 'None'}</li>
        </ul>
        <p>We'll remind you before it's due. ✅</p>
        <hr>
        <p>Task Manager App</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Task creation email sent to ${toEmail}`);
  } catch (error) {
    console.error('❌ Failed to send task email:', error.message);
  }
};

export default sendTaskCreatedEmail;
