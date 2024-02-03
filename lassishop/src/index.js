import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/roboto";
import './nav.css';
import App from './App';
import Navbar from './navbar';
import { menu } from './menu';
import { contactus } from './contactus';
import {Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar>
    <Routes>
      <Route path="/" element={<home/>} />
        <Route path="/menu" element={<menu/>} />
        <Route path="/contactus" element={<contactus/>} />
      </Routes>
    </Navbar>
  </React.StrictMode>
);


reportWebVitals();
