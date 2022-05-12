import './App.css';
import { Routes, Route,useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Navbar from "./pages/Navbar";


function App() {


 
  return (
    <div className="App">
  
   <Routes>      
        <Route path="/" element={<HomePage />}  />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/game' element={<><Navbar location="/"/><Game/></>} />
        <Route path='/game/level1' element={<><Navbar location="/game"/><Level1/></>}/>
        <Route path='/game/level2' element={<><Navbar location="/game/level1"/><Level2/></>}/>
        <Route path='/game/level3' element={<><Navbar location="/game/level2"/><Level3/></>}/>
        </Routes>
    </div>
  );
}

export default App;
