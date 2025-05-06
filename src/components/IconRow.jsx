import house from "../assets/house-2.svg";
import dollarSign from "../assets/dollar-circle.svg";
import people from "../assets/people.svg";
import calendar from "../assets/calendar-tick.svg";
import profilePic from "../assets/Small.png";
import "../styles/iconRow.css";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IconRow = () => {
  const [rental, setRental] = useState({});
  const [host, setHost] = useState({});
  const [availablePeriods, setAvailablePeriods] = useState([]);
  const [period, setPeriod] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalPageById(id);
        setRental(data);
        setHost(data.host);
        setAvailablePeriods(data.availablePeriods);
        setPeriod(data.availablePeriods.period);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchRental();
  }, []);

  return (
    <div className="iconRowContainer">
      <div className="cont1">
        <div className="hostedByContainer">
          <div className="hostedBy">
            <h3>Hosted By: {host.username}</h3>
          </div>
        </div>

        <div className="iconsContainer">
          <div className="iconContainer">
            <img src={house} alt="House icon"></img>
            <p className="text">{rental.category} </p>
          </div>

          <div className="iconContainer">
            <img src={dollarSign} alt="DollarSign icon"></img>
            <p className="text">${rental.pricePerNight}/night</p>
          </div>

          <div className="iconContainer">
            <img src={people} alt="People icon"></img>
            <p className="text">
              {rental.capacity} {rental.capacity > 1 ? "guests" : "guest"}
            </p>
          </div>

          <div className="iconContainer">
            <img src={calendar} alt="Calendar icon"></img>
            {console.log("Periods: " + JSON.stringify(availablePeriods))}
            <div className="text">
              


 {availablePeriods.length > 0 ? (
            availablePeriods.map((period) => (
              <div key={availablePeriods.indexOf}>
                {period.startDate && (
                  <div className="periodContainer">
                   
                      <p>available next: </p>
                      <p className="startDate">{period.startDate}</p>
                      <p> - </p>
                      <p className="endDate">
                        {period.endDate}
                      </p>
                    
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>No matching periods</div>
          )}















            </div>
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
