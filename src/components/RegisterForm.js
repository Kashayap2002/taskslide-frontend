import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';

const RegisterForm = ({ onSuccess, toggleForm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            alert('Registration successful! You can now log in.');
            onSuccess(); // Switch to login form after success
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            alert('Registration failed. Try again.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Register</button>
            </form>
            <div className="form-footer">
                <p>
                    Already have an account?{' '}
                    <button type="button" className="btn-secondary" onClick={toggleForm}>
                        Back to Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
