import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail', // email service provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendEmail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: `"Task Manager" <process.env.EMAIL_USER>`,
            to,
            subject,
            html
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent to', to);
    } catch (error) {
        console.error('Email failed', error);
    }
};