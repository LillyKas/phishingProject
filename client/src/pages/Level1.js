import React, { useState, useEffect, useContext } from "react";
import allTask from "../level1.json";
import "../style/Level1.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";


function Level1() {
  const [task, setTask] = useState(allTask);
  const [countTask, setTaskCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [infoBox, setInfoBox] = useState("");
  const [feedback, setFeedback] = useState("");
  const [buttonUpload, setBtnUpload] = useState(true)
  const [buttonAnswer, setbuttonAnswer] = useState(false)

  const { user, verifyStoredToken } = useContext(AuthContext);
  const token = localStorage.authToken;
  const id = user._id;


  const navigate = useNavigate();


  const clickYes = () => {

    if(countTask < 8){
      setTaskCount(countTask + 1);
    } else if(countTask >= 8) {
      setTaskCount(countTask);
      setbuttonAnswer(true)
      setBtnUpload(false)
    }

    setInfoBox("");
    if (task[countTask].answer) {
      setPoints(points + 1);
      setFeedback(task[countTask].infoIfCorrect);
    
    }  else {
      setFeedback(task[countTask].infoIfWrong);
    
    }
      
  };

  const clickNo = () => {
    if(countTask < 8){
      setTaskCount(countTask + 1);
    } else if(countTask >= 8) {
      setTaskCount(countTask);
      setbuttonAnswer(true)
      setBtnUpload(false)
    }
    setInfoBox("");
    if (!task[countTask].answer) {
      setPoints(points + 1);
      setFeedback(task[countTask].infoIfCorrect);
    } else {
      setFeedback(task[countTask].infoIfWrong);
    }
  };

    
 

  const clickInfo = () => {
    setInfoBox(task[countTask].infoText);
  };



  const update = () => {
    const requestBody = { points };
    axios
      .put(`http://localhost:5005/api/game/${id}`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { points } = response.data;
        setPoints(points);
        verifyStoredToken()
        navigate("/game/level2");
      })
      .catch((err) => console.log(err.response.data));
  };

  console.log(user)
  return (
    <div>
      <div className="container-level1">
        <div className="pictureLevel1"></div>
        <h2>{task[countTask].text}</h2>
        <p>{feedback}</p>
        <p>{points}</p>
        <p>{infoBox}</p> 
        <button onClick={clickInfo}>More Info</button>
        <button onClick={clickYes} disabled={buttonAnswer}>Yes</button>
        <button onClick={clickNo} disabled={buttonAnswer}>No</button>
        <button onClick={update} disabled={buttonUpload}>Go on!</button>
      </div>
    </div>
  );
}

export default Level1;
