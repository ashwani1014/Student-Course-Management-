import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // navigation hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Abhi ke liye dummy login check
    if (email && password) {
      alert("Student Login Successful 🎓");
      navigate("/student-dashboard"); // 👈 Redirect after login
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
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

export default StudentLogin;
