# Task Manager App

This is a simple task manager application built with React for the frontend and Node.js with Express for the backend. It allows users to add, update, and remove tasks.

## Features

- Resizable Component from all Sides
- Add tasks with a title and description.
- Update existing tasks.
- Remove tasks from the list.
- View all tasks in a table format.
- Count the number of "add" and "update" operations.

## Technologies Used

### Frontend

- React.js
- Axios for HTTP requests
- Chakra UI for UI components

### Backend

- Node.js
- Express.js
- Mongoose for MongoDB object modeling
- MongoDB for data storage

## Installation

### Backend

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies with `npm install`.
4. Set up a MongoDB database and update the connection URI in `config.js`.
5. Start the server with `npm run dev`.
6. setup ``.env`` with these keys
    
        - PORT = Port Number
        - MONGO_URI = Your MongoDB Url

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Server will start ```http://localhost:5173```

## Usage

- Visit the frontend URL - ```http://localhost:5173``` in your browser to access the app.
- Use the interface to add, update, and remove tasks.
- View all tasks in a table format.
- Counts for "add" and "update" operations are displayed on the page.

