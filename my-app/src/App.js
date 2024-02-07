import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './Page/Home';
import Basic from './Basic';
import CallBack from './callback/CallBack';
function App() {
  const commonStyle = {
    marginRight: '5px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
          <Link style={commonStyle} to={"/"}> Home |</Link>
          <Link style={commonStyle} to={"/Basic"}> Basic |</Link>
          <Link style={commonStyle} to={"/CallBack"}> CallBack |</Link>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Basic' element={<Basic/>}></Route>
            <Route path='/CallBack' element={<CallBack/>}></Route>
          </Routes>
       </div>
  );
}

export default App;

