import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div style={{ margin: "1rem"}}>
      <h1>Wishlink-test</h1>
      <Outlet></Outlet>


      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Wishlink Dashboard
        </p>
      </header> */}
    </div>
  );
}

export default App;
