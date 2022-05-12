import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";

const Navbar = (props) => {
  const { user  } = useContext(AuthContext);
console.log(user)

  let navigate = useNavigate();

  const location = useLocation();
  let header = "Welcome to the game!";

  if (location.pathname === "/game/level1") {
    header = "Level1";
  } else if (location.pathname === "/game/level2") {
    header = "Level2";
  } else if (location.pathname === "/game/level3") {
    header = "Level3";
  }

  function goback() {
    let path = props.location;
    navigate(path);
  }



            return (
                <div className="header">
                <h1>{header}</h1>
                <button onClick={() => goback()}>zurück</button>
                <h2>{user?.points}</h2>
                </div>
            );
            };

export default Navbar;
