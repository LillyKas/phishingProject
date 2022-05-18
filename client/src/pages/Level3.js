import GameLevel3 from "../components/GameLevel3";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useParams, useNavigate } from "react-router-dom";


function Level3() {


  const [pointsLevel3, setpointsLevel3] = useState(0);
  const [pointsTotal, setpointsTotal] = useState(0);
  const [buttonUpload, setBtnUpload] = useState(true)

  const { user, verifyStoredToken } = useContext(AuthContext);
  const token = localStorage.authToken;
  const id = user._id;

  const navigate = useNavigate();


  const getUser = () => {
		axios.get(`http://localhost:5005/api/game/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then(user => {
         setpointsTotal(user.data.pointsTotal)
			})
			.catch(err => console.log(err))
	}

  useEffect(() => {
    getUser()
  }, [])

  const update = () => {

    let total = pointsTotal + pointsLevel3
   
    const requestBody = { pointsLevel3, pointsTotal:total };
    axios
      .put(`http://localhost:5005/api/game/level3/${id}`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const {pointsLevel3, pointsTotal } = response.data;
        console.log(pointsTotal + pointsLevel3)
        verifyStoredToken();
        navigate("/game/leaderboard");
      })
      .catch((err) => console.log(err.response.data));
  };


  return (
    <div>
    <h1>Levels 3 Points: {pointsLevel3}</h1>
    <button onClick={update} disabled={buttonUpload}>Go on!</button>
      <GameLevel3 pointsLevel3={pointsLevel3} setPoints={setpointsLevel3} setBtnUpload={setBtnUpload}  />
    </div>
  );
}

export default Level3;