

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
   <BrowserRouter>
   <div className='main-layout'>
    <nav>
        <img src={logo} alt="react logo" />
    <ul>
        <li>
            <NavLink to="/"  className={({isActive})=>isActive ?'nav-active':''}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive})=>isActive ?'nav-active':''}>About</NavLink>
        </li>
        <li>
            <NavLink to="/users" className={({isActive})=>isActive ?'nav-active':''}>users</NavLink>
        </li>
    </ul>
    </nav>


    <Routes>
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="users" element={<h1>users page</h1>} />
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/*" element={<Navigate to="/home"/>} />
    </Routes>

   </div>
    
   </BrowserRouter>
  )
}


