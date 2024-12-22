import React from 'react';
import './Header.css';

const Header = ({ token, handleLogout }) => {
    return (
        <header className="app-header">
            <h1>TaskSlide</h1>
            {token && (
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            )}
        </header>
    );
};

export default Header;
