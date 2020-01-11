import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <span className="navbar-brand mb-0 h1">CC Employee Lunch</span>

            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/employee">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/employer">Employer</a>
                    </li>
                </ul> */}

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navigation;
