import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Teacher Login Successful 👨‍🏫");
      navigate("/teacher-dashboard"); // 👈 Redirect to admin page
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="login-container">
      <h2>Teacher / Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default TeacherLogin;
