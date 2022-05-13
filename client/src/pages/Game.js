
import "../style/Start.css";
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'



function Game() {

  const { user, logoutUser  } = useContext(AuthContext)
 
    return (
      <div>
      <div>
  
        <h1>Start Page</h1>
        <p>Lets go start the game, {user?.name}</p>
        <button onClick={logoutUser}>logout</button>
        </div>
        <div className="container">
            <div className="card">
                <h2>Level 1</h2>
          
                <Link className="Link" to="/game/level1">Start</Link>
            </div>
            <div className="card">
                <h2>Level 2</h2>
             
                <Link className="Link" to="/game/level2">Start</Link>
            </div>
            <div className="card">
                <h2>Level 3</h2>
         
                <Link className="Link" to="/game/level3">Start</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default Game;