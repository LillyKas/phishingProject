import React from "react";
import { Link, useLocation  } from "react-router-dom";
import {  useState } from "react";


const Navbar = () => {

    const [path, setPath] = useState('/game');
    
    const location = useLocation();
    let header = "Welcome to the game!"
 

    if(location.pathname === "/game/level1"){
        header = "Level1"
    } else if(location.pathname === "/game/level2"){
        header = "Level2"
        setPath("/game/level1")
    } else if(location.pathname === "/game/level3"){
        header = "Level3"
        setPath("/game/level2")
    }
  

  return (
    <div className="header">
    <h1>{header}</h1>

	  <Link className="Link" to={path}>Zurück</Link>
    </div>
  );
}

export default Navbar;