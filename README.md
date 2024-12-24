# TaskSlide Frontend

The **TaskSlide** frontend is designed to provide users with an intuitive interface for managing their tasks efficiently. Built using **React**, the frontend is connected to a backend API for storing, retrieving, and managing tasks in real-time.

---
## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Why These Technologies?](#why-these-technologies)
4. [Folder Structure](#folder-structure)
5. [Architecture Overview](#architecture-overview)
   - [High-Level Workflow](#high-level-workflow)
   - [Architecture Diagram](#architecture-diagram)
6. [How It Works](#how-it-works)
   - [User Authentication](#user-authentication)
   - [Task Management](#task-management)
7. [Steps to Run Locally](#steps-to-run-locally)
8. [Deployment](#deployment)
9. [Screenshots](#screenshots)
10. [Future Enhancements](#future-enhancements)
11. [Related Links](#related-links)

## Features

1. **User Authentication:**
   - Register and login forms with JWT-based token handling.
   - Secure session management using `localStorage`.

2. **Task Management:**
   - Add tasks with a title and scheduled time.
   - View tasks in order of their scheduled time.
   - Mark tasks as done or delete tasks easily.

3. **Responsive Design:**
   - User-friendly layout with a responsive design for optimal user experience.

4. **Visual Enhancement:**
   - Background image to enhance the user experience.
   - Clear and modern UI with minimal distractions.

---

## Technologies Used

1. **React**: The core library for building the user interface.
2. **CSS**: For styling components and creating a visually appealing interface.
3. **Axios**: For making HTTP requests to the backend.
4. **LocalStorage**: For persisting user session data like tokens.
5. **React Hooks**: For managing component state and side effects.

---

## Why These Technologies?

1. **React**: 
   - Easy to build reusable components.
   - Efficient rendering with the virtual DOM.
   - Rich ecosystem for frontend development.

2. **Axios**: 
   - Simple to use for making HTTP requests.
   - Provides a clean way to handle API interactions with the backend.

3. **CSS**:
   - Provides flexibility in designing modern and responsive layouts.

---

## Folder Structure

```
frontend/
├── public/               # Static assets
├── src/                  # Application source code
│   ├── components/       # Reusable components
│   │   ├── AuthForm.css  # Styles for authentication forms
│   │   ├── Footer.js     # Footer component
│   │   ├── Header.js     # Header component
│   │   ├── LoginForm.js  # Login form component
│   │   ├── RegisterForm.js # Register form component
│   │   ├── TaskList.js   # Task list component
│   │   ├── TaskList.css  # Styles for task list
│   ├── App.js            # Main application entry point
│   ├── App.css           # Global styles
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
```
# Architecture Overview
The **TaskSlide** frontend connects to the backend API to fetch and manipulate data:

## High-Level Workflow

### Frontend (React):
- Handles the user interface for task management and authentication.
- Sends HTTP requests to the backend using **Axios**.

### Backend (Node.js + Express):
- Serves API endpoints for authentication and task management.
- Handles the business logic and database interactions.

### Database (MySQL):
- Stores persistent user and task data.

## Architecture Diagram
```
Frontend (React)
   |
   | HTTP Requests (Axios)
   ↓
Backend (Node.js + Express.js)
   |
   | SQL Queries (mysql2)
   ↓
Database (MySQL)
```
## How It Works

### User Authentication:
- Users can register via the `/api/auth/register` endpoint and login via the `/api/auth/login` endpoint.
- The JWT token received upon login is stored in `localStorage` and sent with each request for authentication.

### Task Management:
- Users can add tasks through the `/api/tasks` endpoint.
- The task list is dynamically fetched and displayed.
- Tasks can be deleted or marked as done.

---

## Steps to Run Locally

1. **Clone the frontend repository:**
   ```
   git clone https://github.com/Kashayap2002/taskslide-frontend.git
   cd taskslide-frontend
   ```
2. **Install Dependencies**

Run the following command to install all necessary dependencies for the frontend:

```bash
npm install
```
3. **Set Up the Backend**

Ensure the backend server is set up and running. Follow the steps in the backend repository's README to start the backend server. The backend repository can be found here:
[TaskSlide Backend Repository](https://github.com/Kashayap2002/taskslide-backend)

4. **Start the Frontend Development Server**

Run the following command to start the development server locally:

```bash
npm start
```

The application will now be accessible at http://localhost:3000.

5. **Test the Application**

- Open the frontend in your browser: [http://localhost:3000](http://localhost:3000).
- Ensure that the backend API is running.
- Test the following features:
  - **Registration**: Create a new account by entering your username, email, and password.
  - **Login**: Log in with your registered email and password.
  - **Task Management**: Add new tasks, view your task list, and delete or mark tasks as done.

## Deployment

The frontend has been deployed on Netlify for free hosting.

**URL**: [TaskSlide on Netlify](https://benevolent-duckanoo-8bcfeb.netlify.app/)

## Screenshots

### Register Page
Allows users to create an account by entering their username, email, and password.

![Register Page](https://raw.githubusercontent.com/Kashayap2002/taskslide-frontend/main/Images/RegisterPage.png)

### Login Page
Users can log in using their registered email and password.

![Login Page](https://raw.githubusercontent.com/Kashayap2002/taskslide-frontend/main/Images/LoginPage.png)

### Task Management Page
Includes features to add new tasks, view existing tasks, and delete or mark tasks as done.

![Task Management Page](https://raw.githubusercontent.com/Kashayap2002/taskslide-frontend/main/Images/Task.png)

## Future Enhancements

1. **Error Handling**:
   - Show detailed error messages for failed operations.

2. **Notifications**:
   - Notify users of upcoming tasks.

3. **Theme Customization**:
   - Allow users to change the theme and background.

4. **Mobile Optimization**:
   - Enhance responsiveness for smaller devices.


## Related Links

- [TaskSlide Backend Repository](https://github.com/Kashayap2002/taskslide-backend)





