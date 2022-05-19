import "../style/Start.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import "../style/Game.css";

function Game() {
  const { user, logoutUser } = useContext(AuthContext);

  let navigate = useNavigate();

  const gotoLevel1 = () => {
    navigate("/game/level1")
  }
  const gotoLevel2 = () => {
    navigate("/game/level2")
  }
  const gotoLevel3 = () => {
    navigate("/game/level3")
  }

  return (
    <div className="background">
      <div className="container">
        <div className="card" onClick={gotoLevel1}>
          <h2>What to expect in Level 1</h2>
          <p>
            This game is about getting to know your enemies' arsenal of weapons.
            Since your enemies' weapons are packed in harmless-looking emails,
            it is of utmost importance that you learn to identify potential risk
            factors in those e-mails.
          </p>
        </div>

        <div className="card" onClick={gotoLevel2}>
          <h2>What to expect in Level 2 </h2>
          <p>
            You have now successfully got to know your enemies' arsenal of
            weapons and... WHAT IS THAT NOISE?! A deep rumbling sounds: the
            castle is being attacked by vile Trojan dragons! There will always
            be two dragons flying at your castle from above. There are words on
            both dragons. Click on the dragon whose term seems more dangerous to
            you, if it appears in an e-mail.
          </p>
        </div>

        <div className="card" onClick={gotoLevel3}>
          <h2> What to expect in Level 3</h2>
          <p>
            Some dragons hid malicious code in the mail during the attack! Take
            a close look at the emails and decide what to do with them and if
            they are a phishing e-mail or not.
          </p>
        </div>
      </div>
      <div className="startBtnContainer">
      <Link className="linkStartBtn" to="/game/level1">
            Start with Level 1
          </Link>

          </div>
    </div>
  );
}

export default Game;
