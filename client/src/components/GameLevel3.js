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
        setPopUpText(allEmails[index].infoIfTrue);
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
      }  else  {
        setPopUpText(allEmails[index].infoIfWrong);
        setIndex(index + 1);
        setShowPopup(true);
      }
    } else if(index === 4) {   
        if (allEmails[index].phishingYes) {
        setPopUpText(allEmails[index].infoIfTrue + "Game Over");
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
        console.log("Game Over")
      }  else  {
        setPopUpText(allEmails[index].infoIfWrong + "Game over");
        setIndex(index + 1);
        setShowPopup(true);
      }
    }
  };

  const checkEmailIsNotPhishing = () => {
    if (index < 4) {
      if (allEmails[index].phishingNot) {
        setPopUpText(allEmails[index].infoIfTrue);
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1 );
        setShowPopup(true);
        
      }  else {
        setPopUpText(allEmails[index].infoIfWrong + "Game over");
        setIndex(index + 1);
        setShowPopup(true);
      }
     
    } else if(index === 4) {   
        if (allEmails[index].phishingNot) {
          setPopUpText(allEmails[index].infoIfTrue + "Game Over");
        props.setBtnUpload(false)
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        setShowPopup(true);
        console.log("Game Over")
      }  else  {
        setPopUpText(allEmails[index].infoIfWrong + "Game Over");
        setIndex(index + 1);
        setShowPopup(true);
      }
    }
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
    </div>
  );
};

export default GameLevel3;
