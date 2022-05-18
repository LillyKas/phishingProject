import allOptions from "../level2.json";
import React, { useState } from "react";

const  Level2Popup = (props) => {

const [text, setText] = useState('')

const dragon0 = () => {setText(allOptions[0].infoText)}
const dragon1 = () => {setText(allOptions[1].infoText)}
const dragon2 = () => {setText(allOptions[2].infoText)}
const dragon3 = () => {setText(allOptions[3].infoText)}
const dragon4 = () => {setText(allOptions[4].infoText)}

    return (
      <div>
     <h1>This is a popup</h1>
     <h2>If you need more infos, just click on the dragon, you would like to know more about.</h2>
     <p>{text}</p>
     <img onClick={dragon0} src={allOptions[0].infoPicture} alt="infoBild0"></img>
     <img onClick={dragon1} src={allOptions[1].infoPicture} alt="infoBild1"></img>
     <img onClick={dragon2} src={allOptions[2].infoPicture} alt="infoBild2"></img>
     <img onClick={dragon3} src={allOptions[3].infoPicture} alt="infoBild3"></img>
     <img onClick={dragon4} src={allOptions[4].infoPicture} alt="infoBild4"></img>
      </div>
    );
  }
  
  export default Level2Popup;