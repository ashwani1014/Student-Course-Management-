import React from "react";
import { useNavigate } from "react-router-dom";
 

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Course Manager</h1>
      <p>Select your role to continue</p>
      <div className="login-buttons">
        <button onClick={() => navigate("/student-login")}>
          Student Login
        </button>
        <button onClick={() => navigate("/teacher-login")}>
          Teacher/Admin Login
        </button>
      </div>
    </div>
  );
}

export default Home;
