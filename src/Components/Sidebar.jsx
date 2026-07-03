import React from "react";
import {FaHome, FaUser, FaSignOutAlt,}from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Employee Portal</h2>
      </div>

      <ul className="menu">
        <li>
        <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </li>

        <li>
          <FaUser className="sidebar-icon" />
          <span>My Profile</span>
        </li>

        <li className="logout">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;