# TaskSlide Frontend

The **TaskSlide** frontend is designed to provide users with an intuitive interface for managing their tasks efficiently. Built using **React**, the frontend is connected to a backend API for storing, retrieving, and managing tasks in real-time.

---

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
## Architecture Overview
