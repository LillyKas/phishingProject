import { Link } from 'react-router-dom'
import "../App.css";
import { AuthContext } from '../context/auth'
import React, { useState, useContext } from 'react'


const  HomePage = props =>  {

  const { user } = useContext(AuthContext)
console.log(user , "lalalal")
  return (
    <div>
      <h1>Home Page</h1>
   
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Link to='/game'>Start The Game</Link>
    </div>
    
  );
}

export default HomePage;