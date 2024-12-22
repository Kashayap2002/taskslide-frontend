import React, { useState, useEffect } from 'react';
import backgroundImage from './components/background.jpg';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskList from './components/TaskList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const handleLogout = () => {
        setToken(null);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div
            className="app"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Header token={token} handleLogout={handleLogout} />
            <main className="main-content">
                {token ? (
                    <TaskList token={token} />
                ) : isRegister ? (
                    <RegisterForm toggleForm={toggleForm} />
                ) : (
                    <LoginForm setToken={setToken} toggleForm={toggleForm} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
