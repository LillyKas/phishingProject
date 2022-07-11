import allEmails from "../level3.json";
import React, { useState } from "react";
import Level3PopupCorrect from "./Level3Popup";


const GameLevel3 = (props) => {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popUpText, setPopUpText] = useState("");


console.log(props)
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
        props.setBtnUpload(false)
        props.setShowBtn(true);
      }  else  {
        setPopUpText(allEmails[index].infoIfWrong + "Game over");
        setIndex(index + 1);
        setShowPopup(true);
        props.setBtnUpload(false)
        props.setShowBtn(true);
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
        props.setShowBtn(true);
        setIndex(index + 1);
        props.setPoints(props.pointsLevel3 + 1);
        props.setBtnUpload(false)
        props.setShowBtn(true);
        setShowPopup(true);
        console.log("Game Over")
      }  else  {
        setPopUpText(allEmails[index].infoIfWrong + "Game Over");
        setIndex(index + 1);
        setShowPopup(true);
        props.setBtnUpload(false)
        props.setShowBtn(true);
      }
    }
  };
;

  return (
    <div>
      {showPopup && <Level3PopupCorrect state={showPopup} text={popUpText} setShowPopup={setShowPopup}  />}
      <div className="level3-container-game-component">
      <img src={allEmails[index].pictureURL} alt="emails"></img>
      <div>
      <button className="answerBtnLevel3" onClick={checkEmailIsPhishing}>PPPPPhishing</button>
      <button className="answerBtnLevel3" onClick={checkEmailIsNotPhishing}>Not Phishing</button>
      </div>
      <h1>Timer: 0 Sec</h1>
      </div>
    </div>
  );
};

export default GameLevel3;
