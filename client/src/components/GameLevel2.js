import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import "../style/GameLevel2.css";
import allOptions from "../level2.json";
import Level2Popup from "./Level2Popup";

const GameLevel2 = (props) => {
  let x1 = 40;
  let y1 = 40;
  let x2 = 500;
  let y2 = 40;

  let x3 = 250;
  let y3 = 200;

  let indexA = 0;
  let indexB = 1;
  let index = 0;
  let points = 0;

  const [showPopup, setShowPopup] = useState(false);
  const [startBtn, setStartBtn] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showTask, setShowTask] = useState(false);

  let pictures = [
    [allOptions[0].option1, allOptions[0].option2],
    [allOptions[1].option1, allOptions[1].option2],
    [allOptions[2].option1, allOptions[2].option2],
    [allOptions[3].option1, allOptions[3].option2],
    [allOptions[4].option1, allOptions[4].option2],
  ];

  let display = [];

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(800, 500).parent(canvasParentRef);

    display[0] = p5.loadImage(pictures[0][0]);
    display[1] = p5.loadImage(pictures[0][1]);

    display[2] = p5.loadImage(pictures[1][0]);
    display[3] = p5.loadImage(pictures[1][1]);

    display[4] = p5.loadImage(pictures[2][0]);
    display[5] = p5.loadImage(pictures[2][1]);

    display[6] = p5.loadImage(pictures[3][0]);
    display[7] = p5.loadImage(pictures[3][1]);

    display[8] = p5.loadImage(pictures[4][0]);
    display[9] = p5.loadImage(pictures[4][1]);
  };

  const draw = (p5) => {
    p5.clear();

    p5.image(display[indexA], x1, y1);
    p5.image(display[indexB], x2, y2);

    p5.noFill();
    p5.strokeWeight(0);
    p5.rect(x2, y2, 300, 100);
    p5.rect(x1, y1, 300, 100);
    p5.line(x3, y3, 300, 100);

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purpose

    if (y1 < 500 && y2 < 500) {
      y1++;
      y2++;
    } else if (y1 === 500 && y2 === 500) {
      y1 = 40;
      y2 = 40;
      x1 = 50;
      x2 = 200;
      indexA += 2;
      indexB += 2;
    } else if (indexA === 8 && indexB === 9) {
      setShowPopup(true);
      props.setBtnUpload(false);
      props.setShowBtn(true);
    }
  };

  const startGame = () => {
    setStartBtn(true);
    setShowStart(false);
  };

  const mousePressed = (_p5, event) => {
    let dOption1 = _p5.dist(x1, y1, _p5.mouseX, _p5.mouseY);
    let dOption2 = _p5.dist(x2, y2, _p5.mouseX, _p5.mouseY);

    if (index <= 3) {
      if (dOption1 < 50 && allOptions[index].correctOption === "option1") {
        points++;
        console.log(points);
      } else if (
        dOption1 < 50 &&
        allOptions[index].correctOption !== "option1"
      ) {
        // console.log("option1 is not correct");
        console.log(points);
      } else if (
        dOption2 < 50 &&
        allOptions[index].correctOption === "option2"
      ) {
        points++;
        console.log(points);
      } else if (
        dOption2 < 50 &&
        allOptions[index].correctOption !== "option2"
      ) {
        // console.log("option2 is not correct");
        console.log(points);
      }
    } else {
      console.log("game finished");
      index = 0;
      setShowPopup(true);
      props.setBtnUpload(false);
      props.setShowBtn(true);
      props.setPoints(points);
    }

    y1 = 50;
    y2 = 50;
    x1 = Math.floor(Math.random() * 2) * 100;
    x2 = Math.floor(Math.random() * 4) * 100 + 200;

    index++;
    indexA += 2;
    indexB += 2;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="task-container">
        {showStart && (
          <p className="task">
            {" "}
            You have now successfully got to know your enemies' arsenal of
            weapons and... WHAT IS THAT NOISE?! A deep rumbling sounds: the
            castle is being attacked by vile Trojan dragons! There will always
            be two dragons flying at your castle from above. There are words on
            both dragons. Click on the dragon whose term seems more dangerous to
            you, if it appears in an e-mail.
          </p>
        )}
        {showStart && (
          <button className="startBtn" onClick={startGame}>
            Start the Game
          </button>
        )}
      </div>
      {showPopup && (
        <Level2Popup state={showPopup} setShowPopup={setShowPopup} />
      )}
      <div className="canvas">
        {startBtn && (
          <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
        )}
      </div>
    </div>
  );
};

export default GameLevel2;
