# Merun Full Auth App

## Description
This is a full authentication app built with Node.js and MongoDB. It supports user registration, login, and password recovery features with JWT-based authentication.

## Features
- User registration with email verification
- Secure login with password hashing
- JWT-based authentication
- Password recovery with email support
- Protected routes for authenticated users

## Modules Used
Here are the npm modules I have used in this project:
- **bcryptjs**: For hashing passwords securely
- **dotenv**: For managing environment variables
- **jsonwebtoken**: For generating and verifying JWT tokens
- **mongoose**: For interacting with MongoDB
- **crypto**: Built-in Node.js module for cryptographic functions
- **mailtrap**: For email sending during development/testing (email verification and password reset)
- **nodemon**: (dev-dependency) Automatically restarts the server when file changes are detected

