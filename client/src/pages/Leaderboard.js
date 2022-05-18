import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useParams, useNavigate } from "react-router-dom";

function Leaderboard() {
  const token = localStorage.authToken;

  const [users, setUser] = useState([]);

  const getAllUser = () => {
    axios
      .get(`http://localhost:5005/api/game/leaderboard`, {
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
    <div>
      <h1>Leaderboard</h1>
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
    </div>
  );
}

export default Leaderboard;
