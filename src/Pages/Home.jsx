import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar.jsx"

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
        <Sidebar />

      <div className="main-content"></div>

      
      <div className="welcome-box">
        <h1>
          Welcome <span className="username">{user?.UserName}</span>
        </h1>

        <p>You have successfully logged in.</p>
      </div>

    </div>
  );
}

export default Home;