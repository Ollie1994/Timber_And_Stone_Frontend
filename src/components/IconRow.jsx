import house from "../assets/house-2.svg";
import dollarSign from "../assets/dollar-circle.svg";
import people from "../assets/people.svg";
import calendar from "../assets/calendar-tick.svg";
import profilePic from "../assets/Small.png";
import "../styles/iconRow.css";

const IconRow = () => {
  return (
    <div className="iconRowContainer">
      <div className="cont1">
        <div className="hostedByContainer">
          <div className="hostedBy">
            <h3>Hosted By: DB</h3>
          </div>
        </div>

        <div className="iconsContainer">
          <div className="iconContainer">
            <img src={house} alt="House icon"></img>
            <p className="text">DB </p>
          </div>
          <div>
            <p className="text"> - </p>
          </div>
          <div className="iconContainer">
            <img src={dollarSign} alt="DollarSign icon"></img>
            <p className="text">DB </p>
          </div>
          <div>
            <p className="text"> - </p>
          </div>
          <div className="iconContainer">
            <img src={people} alt="People icon"></img>
            <p className="text">DB </p>
          </div>
          <div>
            <p className="text"> - </p>
          </div>
          <div className="iconContainer">
            <img src={calendar} alt="Calendar icon"></img>
            <p className="text">DB </p>
          </div>
        </div>
      </div>
      <div className="cont2">
        <div className="profilePicContainer">
          <img src={profilePic} alt="profile pic"></img>
        </div>
      </div>
    </div>
  );
};
export default IconRow;
