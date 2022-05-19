import "../style/Level3.css";


const  Level3Popup = (props) => {

  const closePopup = () => {
    props.setShowPopup(false);
  };
  

    return (
      <div className="popUpLevel3-container">
       <div className="level3Popup">
       <button onClick={closePopup}>X</button>
     <p>{props.text}</p>
      </div>
      </div>
    );
  }
  
  export default Level3Popup;