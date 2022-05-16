import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Authentication.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [points, setPoints] = useState(0);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, points };
    console.log(requestBody);
    axios
      .post("/api/auth/signup", requestBody)
      .then((response) => {
        // redirect to login
        navigate("/login");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const style = {
	 " text-decoration": "none"
  }

  return (
    <div className="authentication">
   <Link to='/ '>Back</Link>
      <div className="container-data">
        <h1>Signup</h1>
	
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Your username: </label>
          <input type="text" value={name} onChange={handleName} />

          <label htmlFor="email">Email: </label>
          <input type="text" value={email} onChange={handleEmail} />

          <label htmlFor="password">Password: </label>
          <input type="password" value={password} onChange={handlePassword} />

          <button type="submit" className="btn-submit">Sign Up</button>
        </form>

        {errorMessage && <h5>{errorMessage}</h5>}

        <h3>Already have an account?</h3>
        <Link style={style} to="/login">Login</Link>
      </div>
    </div>
  );
}
