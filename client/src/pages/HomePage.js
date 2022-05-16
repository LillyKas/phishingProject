import { Link } from 'react-router-dom'
import "../App.css";

const  HomePage = () =>  {


  return (
    <div className='homepage'>
    <div className='container-left'>
    <div className="pictureHomePage"></div>
    <div className="pictureHomePageKnight"></div>
    </div>
    <div className='container-right'>
      <h1>Welcome to Sir Firewall</h1>
   <div className='link-container'>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      </div>
    </div>
    </div>
  );
}

export default HomePage;