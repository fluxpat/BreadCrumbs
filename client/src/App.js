import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Homepage from './components/Homepage/Homepage';
import UserPage from './components/UserPage/UserPage'
import Navbar from './components/Navbar/Navbar'

function App(props) {

  const [user, setUser] = useState(props.user)

  return (
    <div className="App">
      {user.message ? (
        <Route path='/' render={props => <Homepage {...props} setUser={setUser} />} />
      ) : (
          <div className="user-app">
            <Route path='/' render={props => <Navbar {...props} user={user} setUser={setUser} />} />
            <Route path='/' render={props => <UserPage {...props} user={user} setUser={setUser} />} />
          </div>
        )}
    </div>
  );
}

export default App;
