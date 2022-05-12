import { Link } from 'react-router-dom'
import "../App.css";


const  HomePage = props =>  {

  return (
    <div>
      <h1>Home Page</h1>
   
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Link to='/game'>Start The Game</Link>
    </div>
    
  );
}

export default HomePage;