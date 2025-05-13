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

  // maps the avaibleperiods to start and end dates i nseprate lists
  const endDates = availablePeriods.map((period) => period.endDate);
  const startDates = availablePeriods.map((period) => period.startDate);

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

  //swap function
  function helper(i, j, dates) {
    return ([dates[i], dates[j]] = [dates[j], dates[i]]);
  }
  // sends in start and end dates to be sorted into earlies to latest
  const startUseDates = bubbleSort(startDates);
  const endUseDates = bubbleSort(endDates); */

  console.log("startDates: " + startUseDates);
  console.log("endDates: " + endUseDates);

  return (
    <div className="iconRowContainer">
      <div className="cont1">
        <div className="hostedByContainer">
          <div className="hostedBy">
            <h3 className="hostedBytext">Hosted By: {host.username}</h3>
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
            <div className="text">
              <div className="periodContainer">
                <p>available next: </p>
                <p className="startDate">{startUseDates[0]}</p>
                <p> - </p>
                <p className="endDate">{endUseDates[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cont2">
        <div className="profilePicContainer">
          <img
            className="profilePhoto"
            src={profilePhoto}
            alt="profile pic"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default IconRow;