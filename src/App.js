import React, { useState } from 'react';
import './App.css';

/**
 * Custom imports
 */
import Advice from './components/Advice';


function App() {
   const loadNew = (e) =>{
      window.location.reload();
  }
  return (
    <div className="App">
      <div className="container">
        <Advice />
        <button className="reloadBtn" onClick={ loadNew }>Get New Advice</button>
      </div>
    </div>
  );
}

export default App;
