import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './Page/Home';
import Basic from './Basic';
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
          <Routes>
            <Route path='/Basic' element={<Basic/>}></Route>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
       </div>
  );
}

export default App;
