import React from 'react';
import Navbar from './navbar';
import './nav.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
      <Route path="/" element={<home/>} />
        <Route path="/menu" element={<menu/>} />
        <Route path="/contactus" element={<contactus/>} />
      </Routes>
      </Navbar>
    </div>
  )
};

export default App;
