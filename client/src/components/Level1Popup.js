import allTask from "../level1.json";
import React, { useState } from "react";
import "../style/Level1.css";
const  Level1Popup = (props) => {

  const [index, setIndex] = useState(props.index);

  const closePopup = () => {
    props.setShowPopup(false);
  };


    return (
      <div className="level1Popup">
      <button onClick={closePopup}>X</button>
  <p>{props.text}</p>
      </div>
    );
  }
  
  export default Level1Popup;