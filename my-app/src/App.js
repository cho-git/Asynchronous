import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './Page/Home';
import Basic from './Basic';
import ClBack from './callback/ClBack';
import CallBackhHell from './callback/CallBackhHell';
import Promises from './callback/Promises';
import UseApi from './callback/UseApi';

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
          <Link style={commonStyle} to={"/CallBackhHell"}> shop |</Link>
          <Link style={commonStyle} to={"/Promise"}> Promise |</Link>
          <Link style={commonStyle} to={"/UseApi"}> UseApi |</Link>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Basic' element={<Basic/>}/>
            <Route path='/CallBack' element={<ClBack/>}/>
            <Route path='/CallBackhHell' element={<CallBackhHell/>}/>
            <Route path='/Promise' element={<Promises/>}/>
            <Route path='/UseApi' element= {<UseApi/>}/>
          </Routes>
       </div>
  );
}

export default App;


