import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';

const LoginForm = ({ setToken, toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setToken(response.data.token); // Pass token to parent (App.js)
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert('Invalid credentials');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn-primary">Login</button>
            </form>
            <div className="form-footer">
                <p>
                    Don't have an account?{' '}
                    <button type="button" className="btn-secondary" onClick={toggleForm}>
                        Go to Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
