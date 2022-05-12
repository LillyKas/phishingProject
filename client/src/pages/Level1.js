import React, { useState, useEffect } from "react";
import allTask from "../level1.json";
import "../style/Level1.css";
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'



function Level1() {
  const [task, setTask] = useState(allTask);
  const [countTask, setTaskCount] = useState(0);
  const [points, setScore] = useState(0); 
  const [infoBox, setInfoBox] = useState("");
  const [feedback, setFeedback] = useState("");


/*   useEffect(() => {
		console.log('use effect')
		axios.get(`/api/auth/')
			.then(response => {
				const { points} = response.data
				setScore(points)
			})
			.catch(err => console.log(err))
	}, [])
 */

const clickYes = () => { 
  setTaskCount(countTask +1)
  setInfoBox("")

  if(task[countTask].answer){
    setScore(points +1)
    setFeedback(task[countTask].infoIfCorrect)
    console.log("correct")
  } else {
    setFeedback(task[countTask].infoIfWrong)
    console.log("wrong")
  }

}

const clickNo = () => { 
  setTaskCount(countTask +1)
  setInfoBox("")
  if(!task[countTask].answer){
    console.log("correct")
    setScore(points +1)
    setFeedback(task[countTask].infoIfCorrect)
  } else {
    console.log("wrong")
    setFeedback(task[countTask].infoIfWrong)
  }
 }

const clickInfo = () => { setInfoBox(task[countTask].infoText) }


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
      </div>
    </div>
  );
}

export default Level1;
