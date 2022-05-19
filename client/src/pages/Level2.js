import GameLevel2 from "../components/GameLevel2";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useParams, useNavigate } from "react-router-dom";
import "../style/Level2.css";

function Level2() {
  const [pointsLevel2, setpointsLevel2] = useState(0);
  const [pointsTotal, setpointsTotal] = useState(0);
  const [buttonUpload, setBtnUpload] = useState(true)
  const [showBtn, setShowBtn] = useState(false);

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
    <div className="container-level2">
      <GameLevel2 pointsLevel2={pointsLevel2} setPoints={setpointsLevel2} setBtnUpload={setBtnUpload} setShowBtn={setShowBtn} />
      {showBtn && <button className="updateBtn" onClick={update} disabled={buttonUpload}>
          Go on!
        </button> }
    </div>
  );
}

export default Level2;
