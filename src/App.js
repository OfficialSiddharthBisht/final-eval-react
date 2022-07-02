import './App.css';
import React from 'react';
import Bookings from './components/bookings';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Login/>
      <Bookings/>
    </div>
  );
}

export default App;
