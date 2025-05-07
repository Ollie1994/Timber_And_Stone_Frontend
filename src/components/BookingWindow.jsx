import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const BookingWindow = () => {
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  //Sets start and end-date.
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const [showPolicyError, setShowPolicyError] = useState(false);
  const [showDateError, setShowDateError] = useState(false);

  // Choose start date
  const startDateChange = (e) => {
    const newStartDate = e.target.value;

    // If new start date is after end date
    // Set end date to the start date.
    if (new Date(newStartDate) > new Date(endDate)) {
      setEndDate(newStartDate);
    }

    setStartDate(newStartDate);

    if (endDate != "") {
        setShowDateError(false)
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

    if (startDate != "") {
        setShowDateError(false)
    }
  };

  const guestCountChange = (e) => {
    const newCount = e.target.value;

    if (newCount > rental.capacity) {
      const exceedingGuestCount = true;
      setGuestCount(rental.capacity);
    } else if (newCount <= 0) {
      const noGuestCount = true;
      setGuestCount(1);
    }
  };

  console.log(startDate);
  console.log(endDate);
  //Time between the dates in MilliSec
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  //Time diff in days (1000ms x 60sec x 60min x 24h)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);

  // calc total price and service fee on 6% (included)
  const totalPrice = diffDays * rental?.pricePerNight;
  const serviceFee = totalPrice * 0.06;

  //Sets policy check to true/false.
  const [policyChecked, setPolicyChecked] = useState(false);
  const handlePolicyCheck = (e) => {
    setPolicyChecked(e.target.checked);
    setShowPolicyError(false);
  };

  const handleReserve = () => {
    if (policyChecked === false) {
      setShowPolicyError(true);
    } else {
      setShowPolicyError(false);
    }

    if (startDate === "" || endDate === "") {
      setShowDateError(true);
    } else {
      setShowDateError(false);
    }
  };

  return (
    <div className="booking-window">
      <h1>${rental?.pricePerNight}/night</h1>

      <div className="input-container">
        <div className="date-inputs">
          <div className="start-date">
            <h5>CHECK-IN</h5>
            <input type="date" value={startDate} onChange={startDateChange} />
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
      <h5>Checked? {policyChecked ? "true" : "false"}</h5>
      <Button onClick={handleReserve}>
        <h4>RESERVE</h4>
      </Button>

      {showPolicyError && (
        <h4 className="policyError">
          Accept the policy before placing your reservation.
        </h4>
      )}

      {showDateError && <h4 className="dateError">Please enter valid dates to reserve.</h4>}

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
