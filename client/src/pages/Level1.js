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

  const { user } = useContext(AuthContext);
  const token = localStorage.authToken;
  const id = user._id;

  const navigate = useNavigate();

  const clickYes = () => {
    setTaskCount(countTask + 1);
    setInfoBox("");

    if (task[countTask].answer) {
      setPoints(points + 1);
      setFeedback(task[countTask].infoIfCorrect);
      console.log("correct");
    } else {
      setFeedback(task[countTask].infoIfWrong);
      console.log("wrong");
    }
  };

  const clickNo = () => {
    setTaskCount(countTask + 1);
    setInfoBox("");
    if (!task[countTask].answer) {
      console.log("correct");
      setPoints(points + 1);
      setFeedback(task[countTask].infoIfCorrect);
    } else {
      console.log("wrong");
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
        navigate("/game/level2");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <div className="container-level1">
        <div className="pictureLevel1"></div>
        <h2>{task[countTask].text}</h2>
        <p>{infoBox}</p>
        <p>{feedback}</p>
        <p>{points}</p>
        <button onClick={clickInfo}>More Info</button>
        <button onClick={clickYes}>Yes</button>
        <button onClick={clickNo}>No</button>
        <button onClick={update}>update</button>
      </div>
    </div>
  );
}

export default Level1;
