import GameLevel2 from "../components/GameLevel2";
import React, { useState  } from "react";

function Level2() {
  const [points, setPoints] = useState(0);
    return (
      <div>
       <GameLevel2   />
     <h1>{points}</h1>
      </div>
    );
  }
  
  export default Level2;