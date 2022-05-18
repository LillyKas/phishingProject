import allEmails from "../level3.json";
import React, { useState } from "react";
import Level3PopupCorrect from "./Level3Popup";

const GameLevel3 = (props) => {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popUpText, setPopUpText] = useState("");


  const checkEmailIsPhishing = () => {
    if (index < 4) {
      if (allEmails[index].phishingYes) {
        setPopUpText("correct");
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
      }  else  {
        setPopUpText("false");
        setIndex(index + 1);
        setShowPopup(true);
      }
    } else if(index === 4) {   
        if (allEmails[index].phishingYes) {
        setPopUpText("correct + Game Over");
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
        console.log("Game Over")
      }  else  {
        setPopUpText("false + Game Over");
        props.setBtnUpload(false)
        setIndex(index + 1);
        setShowPopup(true);
      }
    }
  };

  const checkEmailIsNotPhishing = () => {
    if (index < 4) {
      if (allEmails[index].phishingNot) {
        setPopUpText("Correct");
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1 );
        setShowPopup(true);
        
      }  else {
        setPopUpText("False");
        setIndex(index + 1);
        setShowPopup(true);
      }
     
    } else if(index === 4) {   
        if (allEmails[index].phishingNot) {
        setPopUpText("correct + Game Over");
        props.setBtnUpload(false)
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
        console.log("Game Over")
      }  else  {
        setPopUpText("false + Game Over");
        setIndex(index + 1);
        setShowPopup(true);
      }
    }
  };

  const checkJoker = () => {
    console.log("joker!");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <Level3PopupCorrect state={showPopup} text={popUpText} />}
      {showPopup && <button onClick={closePopup}>Close</button>}

      <h1>This is Game Level 3 Component</h1>
      <img src={allEmails[index].pictureURL} alt="emails"></img>
      <button onClick={checkEmailIsPhishing}>Phishing</button>
      <button onClick={checkEmailIsNotPhishing}>Not Phishing</button>
      <button onClick={checkJoker}>Joker</button>
    </div>
  );
};

export default GameLevel3;
