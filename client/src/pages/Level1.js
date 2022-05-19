import React, { useState, useEffect, useContext } from "react";
import allTask from "../level1.json";
import "../style/Level1.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Level1Popup from "./../components/Level1Popup";

function Level1() {
  const [task, setTask] = useState(allTask);
  const [countTask, setTaskCount] = useState(0);

  const [pointsLevel1, setpointsLevel1] = useState(0);
  const [buttonUpload, setBtnUpload] = useState(true);
  const [buttonAnswer, setbuttonAnswer] = useState(false);

  const [popUpText, setPopUpText] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const { user, verifyStoredToken } = useContext(AuthContext);
  const token = localStorage.authToken;
  const id = user._id;

  const navigate = useNavigate();

  const clickYes = () => {
    if (countTask < 8) {
      setTaskCount(countTask + 1);
    } else if (countTask >= 8) {
      setTaskCount(countTask);
      setbuttonAnswer(true);
      setBtnUpload(false);
      setShowBtn(true)
    }

    setPopUpText("");
    if (task[countTask].answer) {
      setpointsLevel1(pointsLevel1 + 1);
      setPopUpText(task[countTask].infoIfCorrect);
      setShowPopup(true);
    } else {
      setPopUpText(task[countTask].infoIfWrong);
      setShowPopup(true);
    }
  };

  const clickNo = () => {
    if (countTask < 8) {
      setTaskCount(countTask + 1);
    } else if (countTask >= 8) {
      setTaskCount(countTask);
      setbuttonAnswer(true);
      setBtnUpload(false);
      setShowBtn(true)
    }
    setPopUpText("");
    if (!task[countTask].answer) {
      setpointsLevel1(pointsLevel1 + 1);
      setPopUpText(task[countTask].infoIfCorrect);
      setShowPopup(true);
    } else {
      setPopUpText(task[countTask].infoIfWrong);
      setShowPopup(true);
    }
  };

  const clickInfo = () => {
    setPopUpText(task[countTask].infoText);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const update = () => {
    const requestBody = { pointsLevel1, pointsTotal: pointsLevel1 };
    axios
      .put(`http://localhost:5005/api/game/${id}`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { pointsLevel1, pointsTotal } = response.data;
        setpointsLevel1(pointsLevel1);
        verifyStoredToken();
        navigate("/game/level2");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <div className="container-level1">
      {showBtn && <button className="updateBtn" onClick={update} disabled={buttonUpload}>
          Go on!
        </button> }
        <h2 className="taskLevel1">{task[countTask].text}</h2>
        <button className="moreInfoBtn" onClick={clickInfo}>More Info</button>
       <div className="picturePoints">
    
        <div className="pictureLevel1"></div>

        </div>
        {showPopup && (
          <Level1Popup
            state={showPopup}
            setShowPopup={setShowPopup}
            text={popUpText}
          />
        )}
          <div className="btnLevel1-container">
        <button className="answerBtn" onClick={clickYes} disabled={buttonAnswer}>
          Yes
        </button>
        <button className="answerBtn" onClick={clickNo} disabled={buttonAnswer}>
          No
        </button>
        </div>
      </div>
    </div>
  );
}

export default Level1;
