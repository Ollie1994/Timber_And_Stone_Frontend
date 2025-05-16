// https://stackoverflow.com/questions/37817334/javascript-bubble-sort
import house from "../assets/house-2.svg";
import dollarSign from "../assets/dollar-circle.svg";
import people from "../assets/people.svg";
import calendar from "../assets/calendar-tick.svg";
import "../styles/iconRow.css";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mapPeriodDates } from "../helpers/HelpFunctions";

const IconRow = () => {
  const [rental, setRental] = useState({});
  const [host, setHost] = useState({});
  const [availablePeriods, setAvailablePeriods] = useState([]);
  const [period, setPeriod] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const profilePhoto = host.profilePhoto;
 
  // calling mapPeriodDates function in HelpFunctions.js
  const { startUseDates, endUseDates } = mapPeriodDates(availablePeriods);

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

  console.log("startDates: " + startUseDates);
  console.log("endDates: " + endUseDates);

  return (
    <div className="iconRow-iconRowContainer">
      <div className="iconRow-cont1">
        <div className="iconRow-hostedByContainer">
          <div className="iconRow-hostedBy">
            <h3 className="iconRow-hostedBytext">Hosted By: {host.username}</h3>
          </div>
        </div>
        <div className="iconRow-iconsContainer">
          <div className="iconRow-iconContainer">
            <img src={house} alt="House icon"></img>
            <h5 className="iconRow-text">{rental.category} </h5>
          </div>

          <div className="iconRow-iconContainer">
            <img src={dollarSign} alt="DollarSign icon"></img>
            <h5 className="iconRow-text">${rental.pricePerNight}/night</h5>
          </div>

          <div className="iconRow-iconContainer">
            <img src={people} alt="People icon"></img>
            <h5 className="iconRow-text">
              {rental.capacity} {rental.capacity > 1 ? "guests" : "guest"}
            </h5>
          </div>

          <div className="iconRow-iconContainer">
            <img src={calendar} alt="Calendar icon"></img>
            <div className="iconRow-text">
              <div className="iconRow-periodContainer">
                <h5>available next: </h5>
                <h5 className="iconRow-startDate">{startUseDates[0]}</h5>
                <h5> - </h5>
                <h5 className="iconRow-endDate">{endUseDates[0]}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iconRow-cont2">
        <div className="iconRow-profilePicContainer">
          <img
            className="iconRow-profilePhoto"
            src={profilePhoto}
            alt="profile pic"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default IconRow;

  /* maps the avaibleperiods to start and end dates i nseprate lists
  const endDates = availablePeriods.map((period) => period.endDate);
  const startDates = availablePeriods.map((period) => period.startDate);*/

    /* sorts dates into earliest to latest
  function bubbleSort(dates) {
    let sorted = false;

    let counter = 0;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < dates.length - 1 - counter; i++) {
        if (dates[i] > dates[i + 1]) {
          helper(i, i + 1, dates);
          sorted = false;
        }
      }
      counter++;
    } 
    console.log(dates);

    return dates;
  }

   swap function
  function helper(i, j, dates) {
    return ([dates[i], dates[j]] = [dates[j], dates[i]]);
  }
  // sends in start and end dates to be sorted into earlies to latest
  const startUseDates = bubbleSort(startDates);
  const endUseDates = bubbleSort(endDates); */