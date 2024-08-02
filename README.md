# Social Media Application

## Introduction

This is a simple social media application where users can create posts, like posts, and follow other users. The application is built using the MERN stack (MySQL, Express.js, React.js, Node.js).

## Requirements

- Node.js
- MySQL
- npm

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/madhurx/weboconnectTask.git
    ```

2. Backend setup:
    ```bash
    cd weboconnectTask/backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:
    ```
    DB_NAME=social_media_mm
    DB_USER=root
    DB_PASSWORD=password
    DB_HOST=localhost
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Start the MySQL server and create the database:
    ```sql
    CREATE DATABASE social_media_mm;
    ```

5. Start the backend server:
    ```bash
    npm run dev
    ```

6. Frontend setup:
    ```bash
    cd ../frontend
    npm install
    npm run start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Register a new user and log in.
- Create posts, like posts, and follow other users.

## Additional Notes

- Ensure the MySQL server is running before starting the backend server.
- JWT tokens are used for authentication.

