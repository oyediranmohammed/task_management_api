# 📝 Task Management API

This is a robust and scalable Task Management RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It provides user authentication, task creation and management, profile updating, and automated email notifications.

## 🚀 Key Features of the API

- ✅ **User Authentication**
  - Register, login, secure JWT-based sessions
- 🧑‍💼 **User Management**
  - Update profile info (name, email, password)
- 📋 **Task Management**
  - Create, view, update, and delete tasks
  - Mark tasks as complete/incomplete
- 📧 **Email Notifications**
  - Email on task creation
  - Scheduled reminders for upcoming tasks
- 🔐 **Secure API**
  - Password hashing, auth middleware, and route protection

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JSON Web Tokens (JWT), Bcrypt
- **Emails:** Nodemailer
- **Environment Management:** dotenv




## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/oyediranmohammed/task_management_api.git
cd task_management_api
```
### 2. Install Dependencies
```bash
npm install
```

3. Set up environment variables

Create a .env file in the root with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
EMAIL_FROM=your_email@example.com
EMAIL_PASS=your_email_password

```
4. Run the app
```
npm start
```

👥 Collaborators

This project is developed and maintained by:

   Mohammed A. Oyediran: oyediranmohammed@gmail.com

   Victoria O. Akinwumi: victoriaoakinwumi@gmail.com

   Khubaib A. Jimoh: yungsci101@gmail.com
