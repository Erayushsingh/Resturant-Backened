# Restaurant Admin Panel

Welcome to the Restaurant Backened Panel! for a restaurant management system built using Node.js and Express.js. It follows the MVC (Model-View-Controller) architectural pattern and uses MongoDB for data storage and JWT for user authentication..

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Middleware](#middleware)
- [Authentication](#authentication)
- [Database](#database)
- [Postman for API Verification](#postman-for-api-verification)




## Features

- **User Registration and Login**: Users can create an account and log in securely.
- **JWT Authentication**: Secure authentication mechanism using JSON Web Tokens.
- **Protected Routes**: Only authenticated users can access certain routes.
- **Input Validation**: Ensures that the data being sent to the API meets required formats and constraints.
- **Error Handling**: Comprehensive error handling for various scenarios (e.g., missing fields, invalid tokens).
- **Data Persistence**: All data is stored in a MongoDB database, ensuring persistence across server restarts.


## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/restaurant-backend.git

2. Navigate to the project directory:

   ```bash
  cd restaurant-backend

   
3. Install the dependencies:

   ```bash
   npm install

4. Set up environment variables:

   Create a .env file in the root directory and add the following:

   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Start the Server:

   ```bash
   npm start



## Usage

Once the server is running, you can interact with the API endpoints using tools like Postman or curl.

## Middleware

The application uses the following middleware:

Body Parser: To parse incoming request bodies in a middleware before your handlers.
JWT Middleware: To protect certain routes by verifying JWTs.

## Authentication

JWT is used for user authentication. When a user registers or logs in, they receive a token that must be included in the Authorization header for protected routes.

## Database

MongoDB is used to store all data related to users and restaurants. The database schema is defined using Mongoose models.

## Postman for API Verification

Postman is a great tool for testing APIs.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements, features, or bug fixes.


