import React, { Component } from 'react';
// import './App.css';

// import EmployerTableView from './components/employer/EmployerTableView';
import EmployeeView from './components/employee/EmployeeView';

class App extends Component<{}, {}> {

  render() {
    return (
      <div>
        <nav className="navbar bg-dark text-white">
          <span className="navbar-brand mb-0 h1">CC Employee Lunch</span>
        </nav>
        <EmployeeView />
      </div>
    );
  }
}

export default App;
