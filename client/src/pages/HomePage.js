import { Link } from 'react-router-dom'
import "../App.css";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Link to='/start'>Start</Link>
    </div>
  );
}

export default HomePage;