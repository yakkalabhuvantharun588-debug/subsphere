import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    if(email && password){
      alert("Account Created Successfully");
      navigate("/login");
    } else {
      alert("Enter email and password");
    }
  };

  return(

    <div className="auth-page">
      <div className="auth-card">
      <h2>Signup</h2>

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

      <button onClick={handleSignup}>
        Create Account
      </button>

      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>

    </div>
    </div>
  );
}