import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import "../style/GameLevel2.css";
import allOptions from "../level2.json";


const GameLevel2 = (props) => {
  let x1 = 50;
  let y1 = 50;

  let x2 = 200;
  let y2 = 50;
  let index = 0;
  let points = 0;



  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
   
   p5.createCanvas(800, 500).parent(canvasParentRef);

   
  
  };

  const draw = (p5) => {
    p5.background(100);

    p5.text(allOptions[index].option1, x1, y1, 200, 20);
    p5.text(allOptions[index].option2, x2, y2, 200, 20);

  
  
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    if (y1 < 500 && y2 < 500) {
      y1++;
      y2++;
    } else if (y1 === 500 && y2 === 500) {
      y1 = 50;
      y2 = 50;
      x1 = 50;
      x2 = 200;
    }

    p5.fill("blue");
    p5.strokeWeight(0);
    p5.textSize(18);
  };



  const mousePressed = (_p5, event) => {
    let dOption1 = _p5.dist(x1, y1, _p5.mouseX, _p5.mouseY);
    let dOption2 = _p5.dist(x2, y2, _p5.mouseX, _p5.mouseY);

    if (index <= 3) {
       
    if (dOption1 < 100 && allOptions[index].correctOption === "option1") {
      console.log("option1 correct");
     points += 1
    } else if ( dOption1 < 100 && allOptions[index].correctOption !== "option1") 
    {
      console.log("option1 is not correct");
     
    } else if (
      dOption2 < 100 &&
      allOptions[index].correctOption === "option2"
    ) {
      console.log("option2  correct");
      points += 1
    } else if (
      dOption2 < 100 &&
      allOptions[index].correctOption !== "option2"
    ) {
      console.log("option2 is not correct");
    
    }
   
} else {
    console.log("game finished")
    index = 0;
}

    y1 = 50;
    y2 = 50;
    x1 = Math.floor(Math.random() * 2) * 100;
    x2 = (Math.floor(Math.random() * 2) * 100) + 250;

    index = index + 1;

    /*   x1 = Math.floor(Math.random() * 6) * 100;
    x2 = Math.floor(Math.random() * 6) * 100; */

   
  };

  return (
    <div className="canvas">
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
    </div>
  );
};

export default GameLevel2;
