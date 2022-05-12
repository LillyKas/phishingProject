import React, { useState } from "react";
import allTask from "../level1.json";

function Level1() {
  const [task, setTask] = useState(allTask);

  console.log(task);
  return (
    <div>
      <div>
        
        <h2>{task[0].text}</h2>
      </div>
    </div>
  );
}

export default Level1;
