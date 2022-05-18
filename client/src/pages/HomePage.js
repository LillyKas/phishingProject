import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container-left">
        <div className="pictureHomePage"></div>
        <div className="pictureHomePageKnight"></div>
      </div>
      <div className="container-right">
        <h1>Welcome to Sir Firewall</h1>
        <p>
          This is a game to train you to recognize phishing emails. Did you know
          that phishing attacks have increased by 667% since the Corona
          pandemic? Impressive, isn't it? All the more important to be well
          prepared. This little game will help you with that.
        </p>
        <div className="link-container">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
