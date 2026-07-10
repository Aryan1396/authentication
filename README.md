<div align="center">

# 🔐 Authentication System

### A Complete User Authentication System built with Node.js, Express.js, MongoDB & Mongoose

<img src="https://img.shields.io/badge/Node.js-Express-success?style=for-the-badge&logo=node.js">
<img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb">
<img src="https://img.shields.io/badge/Mongoose-ODM-red?style=for-the-badge">
<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript">
<img src="https://img.shields.io/github/license/Aryan1396/authentication?style=for-the-badge">
<img src="https://img.shields.io/github/stars/Aryan1396/authentication?style=for-the-badge">
<img src="https://img.shields.io/github/forks/Aryan1396/authentication?style=for-the-badge">

</div>

---

## 📖 Overview

This project is a secure user authentication system that allows users to register, log in, and manage authentication using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

It demonstrates backend authentication concepts including:

- 🔑 User Registration
- 🔐 User Login
- 📧 Unique Email Validation
- 🛡 Password Security
- 💾 MongoDB Database Integration
- ⚡ REST API Development
- 🏗 Clean Project Structure

---

# ✨ Features

✅ User Registration

✅ User Login

✅ Secure Password Storage

✅ Unique Email Validation

✅ MongoDB Database

✅ Express REST APIs

✅ Mongoose Models

✅ Error Handling

✅ Clean Folder Structure

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| 🟢 Node.js | Backend Runtime |
| 🚀 Express.js | Server Framework |
| 🍃 MongoDB | Database |
| 🔥 Mongoose | ODM |
| 📦 npm | Package Manager |
| 💻 JavaScript | Programming Language |

---

# 📂 Project Structure

```
authentication/
│
├── models/
│   └── user.model.js
│
├── routes/
│
├── controllers/
│
├── config/
│
├── server.js
│
├── package.json
│
└── README.md
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Aryan1396/authentication.git
```

### Go to Project

```bash
cd authentication
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node server.js
```

or

```bash
npm start
```

---

# ⚙ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string
```

---

# 📸 Screenshots

## Registration Page

<p align="center">
<img src="./assets/register.png" width="700">
</p>

---

## Login Page

<p align="center">
<img src="./assets/login.png" width="700">
</p>

---

## MongoDB Database

<p align="center">
<img src="./assets/mongodb.png" width="700">
</p>

---

# 🔗 API Endpoints

## Register

```http
POST /register
```

### Request

```json
{
    "username":"Aryan",
    "email":"aryan@gmail.com",
    "password":"123456"
}
```

---

## Login

```http
POST /login
```

### Request

```json
{
    "email":"aryan@gmail.com",
    "password":"123456"
}
```

---

# 🗄 Database Schema

```javascript
{
    username: String,

    email: {
        type: String,
        unique: true
    },

    password: String
}
```

---

# 🔒 Security Features

- ✅ Unique Email Validation
- ✅ MongoDB Indexes
- ✅ Password Authentication
- ✅ Proper Error Responses
- ✅ Input Validation

---

# 📌 Future Improvements

- ⏳ JWT Authentication
- 🔑 Password Hashing using bcrypt
- 📧 Email Verification
- 🔄 Forgot Password
- 📱 OTP Authentication
- 🌐 Google OAuth
- 🐙 GitHub OAuth
- 🔐 Refresh Tokens
- 👥 Role Based Authentication

---

# 💡 Learning Objectives

This project demonstrates:

- REST APIs
- Express.js
- MongoDB
- Mongoose
- Authentication Flow
- Database Design
- Error Handling
- Backend Development

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# ⭐ Support

If you found this project useful,

🌟 Give it a Star on GitHub.

---

# 👨‍💻 Author

### Aryan Patel

💼 Software Developer

🔗 GitHub

https://github.com/Aryan1396

🔗 LinkedIn

https://www.linkedin.com/in/aryan1396/

---

<div align="center">

## ⭐ If you like this project, don't forget to Star it! ⭐

Made with ❤️ by Aryan Patel

</div>
