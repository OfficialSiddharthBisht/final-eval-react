import './App.css';
import React from 'react';
import Bookings from './components/bookings';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<Login/>}></Route>
        <Route path='/bookings' element ={<Bookings/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
