import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-dark bg-dark text-white">
            <span className="navbar-brand mb-0 h1">CC Employee Lunch</span>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/login">Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
