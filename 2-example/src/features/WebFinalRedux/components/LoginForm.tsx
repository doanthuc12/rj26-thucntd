import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";

function LoginForm() {
  // React States
  const [user, setUser] = useState({ name: "", pasword: "" });
  const [error, setError] = useState("");

  // User Login info
  const adminUsser = [
    {
      username: "aptech",
      password: "aptech",
    },
  ];

  const Login = (details: any) => {
    console.log(details);
  };
  const Logout = () => {
    console.log("Logout");
  };


  return (
    <div className="app">(user.pasword !== "") ? 
        <div className = "Welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button>Logout</button>
        </div>
      </div>
  );
  
}

export default LoginForm;
