import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    // fake authentication
    if(email && password){
      login(email);
      navigate("/");
    }
    else{
      alert("Enter email and password");
    }
  };

  return (
  <div className="auth-page">
    <div className="auth-form">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <p>
        No account? <Link to="/signup">Signup</Link>
      </p>

    </div>
  </div>
);
}