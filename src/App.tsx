import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';

import UserLogin from './components/user/UserLogin';
import Home from './components/Home';

class App extends Component<{}, {}> {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={UserLogin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
