import GameLevel2 from "../components/GameLevel2";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useParams, useNavigate } from "react-router-dom";

function Level2() {
  const [pointsLevel2, setpointsLevel2] = useState(0);
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

    let total = pointsTotal + pointsLevel2
   
    const requestBody = { pointsLevel2, pointsTotal:total };
    axios
      .put(`http://localhost:5005/api/game/level2/${id}`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const {pointsLevel2, pointsTotal } = response.data;
        console.log(pointsTotal + pointsLevel2)
        verifyStoredToken();
        navigate("/game/level3");
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div>
      <h1>Levels 2 Points: {pointsLevel2}</h1>
      <button onClick={update} disabled={buttonUpload}>Go on!</button>
      <GameLevel2 pointsLevel2={pointsLevel2} setPoints={setpointsLevel2} setBtnUpload={setBtnUpload} />
    </div>
  );
}

export default Level2;
