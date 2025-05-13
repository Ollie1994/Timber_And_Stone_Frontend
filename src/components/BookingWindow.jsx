import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const BookingWindow = () => {
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //Get rental
  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalPageById(id);
        setRental(data);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchRental();
  }, []);

  //States for values
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guestCount, setGuestCount] = useState("");

  //Boolean states for checking show/hide.
  const [showPolicyError, setShowPolicyError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);
  const [showGuestError, setShowGuestError] = useState(false);
  const [showSuccessMessage, setShowSucccessMessage] = useState(false);

  const [showInputForm, setShowInputForm] = useState(true);

  // Choose start date
  const startDateChange = (e) => {
    const newStartDate = e.target.value;

    // If new start date is after end date
    // Set end date to the start date.
    if (new Date(newStartDate) > new Date(endDate)) {
      setEndDate(newStartDate);
    }

    setStartDate(newStartDate);

    //Check if enddate has been entered
    if (endDate != "") {
      setShowDateError(false);
    }
  };

  //Choose end date
  const endDateChange = (e) => {
    const newEndDate = e.target.value;

    // If new end date is before start date
    // Set startdate to same as enddate
    if (new Date(newEndDate) < new Date(startDate)) {
      setStartDate(newEndDate);
    }

    setEndDate(newEndDate);

    //Check if startdate has been entered
    if (startDate != "") {
      setShowDateError(false);
    }
  };

  //When entering guest count
  const guestCountChange = (e) => {
    //Set count to int to compare properly
    const newCount = parseInt(e.target.value, 10);

    //Check if count is greater than capacity
    if (newCount > rental.capacity) {
      setGuestCount(rental.capacity);
      //if count is 0 or less
    } else if (newCount <= 0) {
      setGuestCount(1);
    } else {
      setGuestCount(newCount);
    }

    setShowGuestError(false);
  };

  //Calc days between dates
  //Time between the dates in MilliSec
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  //Time diff in days (1000ms x 60sec x 60min x 24h)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // calc total price and service fee on 6% (included)
  const totalPrice = diffDays * rental?.pricePerNight;
  const serviceFee = totalPrice * 0.06;

  //Sets policy check to true/false.
  const [policyChecked, setPolicyChecked] = useState(false);
  const handlePolicyCheck = (e) => {
    setPolicyChecked(e.target.checked);
    setShowPolicyError(false);
  };

  //When attempting to reserve:
  const handleReserve = () => {
    if (policyChecked === false) {
      setShowPolicyError(true);
    } else {
      setShowPolicyError(false);
    }

    //Check if dates are empty
    const isDateMissing = startDate === "" || endDate === "";
    //Check if the date-difference is greater than 0
    const isDateInvalid = diffDays <= 0;

    //Show error messages if values are invalid
    if (isDateMissing || isDateInvalid) {
      setShowDateError(true);
    } else {
      setShowDateError(false);
    }

    if (!guestCount) {
      setShowGuestError(true);
    } else {
      setShowGuestError(false);
    }

    // Reset form if all fields are valid.
    if (policyChecked && !isDateMissing && !isDateInvalid && guestCount) {
      resetForm();
    }
  };

  //Reset the form and show success response.
  const resetForm = () => {

    setShowSucccessMessage(true);
    setShowInputForm(false);

    //wait 10 sec and set back values
    setTimeout(() => {
      setShowSucccessMessage(false);
      setShowInputForm(true);
      setStartDate("");
      setEndDate("");
      setGuestCount("");
      setPolicyChecked(false);
    }, 10000);
  };

  return (
    <div className="booking-window">
      <h2>${rental?.pricePerNight}/night</h2>

      {showInputForm && (
        <div className="top-container">
          <div className="input-container">
            <div className="date-inputs">
              <div className="start-date">
                <h5>CHECK-IN</h5>
                <input
                  type="date"
                  value={startDate}
                  onChange={startDateChange}
                />
              </div>
              <div className="end-date">
                <h5>CHECK-OUT</h5>
                <input type="date" value={endDate} onChange={endDateChange} />
              </div>
            </div>
            <div className="guests-input">
              <h5>GUESTS:</h5>
              <input
                type="number"
                value={guestCount}
                onChange={guestCountChange}
                placeholder="Enter the amount of guests"
              />
            </div>
          </div>

          <label className="policy-container">
            <input
              type="checkbox"
              checked={policyChecked}
              onChange={handlePolicyCheck}
            />
            <h5>I accept the</h5>
            <h5 className="policy">
              <strong>Policy</strong>
            </h5>
          </label>
          <Button className="reserve-button" onClick={handleReserve}>
            <h4>RESERVE</h4>
          </Button>
        </div>
      )}

      <div className="validation-messages">
        {showSuccessMessage && ( // Show guest error if not entered
          <h4 className="success-message">
            Your booking request has been sent to the host!
            <br />
            Check-In: {startDate} - Check-Out: {endDate}
            <br />
            Number of guests: {guestCount}
            <br />
            You will recieve a notification once your booking has been approved.
          </h4>
        )}

        {showDateError && ( // Show date error if either date has not been entered.
          <h4 className="dateError">Please enter valid dates to reserve.</h4>
        )}

        {showGuestError && ( // Show guest error if not entered
          <h4 className="guestError">Please enter amount of guests.</h4>
        )}

        {showPolicyError && ( // Show policy error if not clicked
          <h4 className="policyError">
            Accept the policy before placing your reservation.
          </h4>
        )}
      </div>

      <h4>You won't be charged yet.</h4>
      <div className="booking-summary vertical">
        <div className="flex-container">
          <div className="fee">
            <h3>
              ${rental?.pricePerNight} x {diffDays ? diffDays : 0}:
            </h3>
          </div>
          <div className="sum">
            <h3>${totalPrice ? totalPrice : 0}</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Including Service Fee:</h3>
          </div>
          <div className="sum">
            <h3>${serviceFee ? serviceFee : 0}</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>
              <strong>Total:</strong>
            </h3>
          </div>
          <div className="sum">
            <h3>
              <strong>${totalPrice ? totalPrice : 0}</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingWindow;