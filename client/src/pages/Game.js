import { Link } from 'react-router-dom'
import "../style/Start.css";


function Game() {

    return (
      <div>
      <div>
        <h1>Start Page</h1>
        <p>Lets go start the game!</p>
        </div>
        <div className="container">
            <div className="card">
                <h2>Level 1</h2>
          
                <Link className="Link" to="/game/level1">Start</Link>
            </div>
            <div className="card">
                <h2>Level 2</h2>
             
                <Link className="Link" to="/game/level2">Start</Link>
            </div>
            <div className="card">
                <h2>Level 3</h2>
         
                <Link className="Link" to="/game/level3">Start</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default Game;