import './App.css';
import Subscribe from './Subscribe';
import React from 'react';
import { useState } from 'react'
import SignIn from './SignIn';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <h1>Learn+ Subscription Site</h1>
      <Subscribe />
      {user ? <h1>Paywalled Content!!</h1> : <SignIn setUser={setUser} /> }
    </div>
  );
}

export default App;
