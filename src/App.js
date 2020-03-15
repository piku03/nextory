import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/homepage/homepage.component';
import Login from './pages/Login/login.component';
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      
    </div>
  );
}

export default App;
