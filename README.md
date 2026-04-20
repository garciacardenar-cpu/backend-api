# 🚀 Backend API - User Management & Authentication

A RESTful API built with Node.js and Express that provides secure user authentication and CRUD operations.

---

## 📌 Features

- User registration with password hashing (bcrypt)
- Secure login with JWT authentication
- Protected routes using middleware
- CRUD operations (Create, Read, Update, Delete)
- Clean and scalable project structure

---

## 🛠️ Tech Stack

- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- MySQL / PostgreSQL (optional integration)
- dotenv

---

## 📂 Project Structure

src/
│
├── controllers/   # Handles request logic
├── routes/        # Defines API endpoints
├── models/        # Database structure (optional)
├── middleware/    # Authentication and validations
├── config/        # Environment and DB configs
└── app.js         # Main server file

---

## 🔐 Authentication Flow

1. User registers with email and password
2. Password is hashed using bcrypt
3. User logs in and receives a JWT token
4. Token is used to access protected routes

---

## ⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/garciacardenar-cpu/backend-api.git

Go to the project folder:

cd backend-api

Install dependencies:

npm install

Create a .env file:

PORT=3000
JWT_SECRET=your_secret_key

Run the server:

npm run dev

---

## 📡 API Endpoints

### Public Routes

- POST /register → Register a new user
- POST /login → Authenticate user

### Protected Routes

- GET /users → Get all users
- POST /users → Create a user

> Requires JWT token in headers

---

## 🧪 Example Request (Protected Route)

Headers:
Authorization: your_token_here

---

## 🎯 Use Cases

- Backend for web applications
- Authentication systems
- User management systems
- API base for scalable apps

---

## 👨‍💻 Author

Developed by Ricardo  
Backend Developer focused on scalable and secure systems

---

## 📬 Contact

Available for freelance opportunities.
