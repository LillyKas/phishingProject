import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios";
import "../style/Navbar.css";


const Navbar = (props) => {
  const { user} = useContext(AuthContext);
  const [points, setPoints] = useState(0);
  const token = localStorage.authToken;
  const id = user._id;
  let navigate = useNavigate();
  const location = useLocation();
  let header = "Welcome to the game!";
  const [countTask, setTaskCount] = useState(0);
 

  if (location.pathname === "/game/level1") {
    header = "Level1";
 
  } else if (location.pathname === "/game/level2") {
    header = "Level2";

  } else if (location.pathname === "/game/level3") {
    header = "Level3";
  } else if (location.pathname === "/game/leaderboard") {
    header = "Leaderboard";
  }

  function goback() {
    let path = props.location;
    setTaskCount(0)
    navigate(path);
  }


  const getUser = () => {
		axios.get(`http://localhost:5005/api/game/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then(user => {
        setPoints(user.data.pointsTotal)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getUser()
	}, [])

  const toHomePage = () => {
    navigate("/game")
  }

      return (
        <div className="header">
     
        <button onClick={() => goback()}>zurück</button>
        <h1 onClick={toHomePage}>{header}</h1>
        <p>Your points: {points}</p>
        </div>
            );
            };

export default Navbar;
