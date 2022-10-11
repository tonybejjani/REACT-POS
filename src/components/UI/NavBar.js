/** @format */

import React from 'react';

import './NavBar.css';
const NavBar = (props) => {
  return (
    <div className="navbar ">
      <ul>
        <li>Menu </li>
        <li>Orders</li>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default NavBar;
