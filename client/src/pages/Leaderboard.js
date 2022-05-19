import React, { useState, useEffect} from "react";
import axios from "axios";
import "../style/Leaderboard.css";
import { Link } from "react-router-dom";

function Leaderboard() {
  const token = localStorage.authToken;

  const [users, setUser] = useState([]);
 

  const getAllUser = () => {
    axios
      .get(`/api/game/leaderboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((users) => {
        setUser(users.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const userList = users.sort((a, b) => b.pointsTotal - a.pointsTotal);

  return (
    <div className="leaderboard-container">
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.pointsTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="linkStartBtn" to="/game">
            Back to the start
          </Link>
    </div>
  );
}

export default Leaderboard;
