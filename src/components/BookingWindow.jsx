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
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-01-02");

  //Check date order
  function validDate() {
    if (new Date(endDate) < new Date(startDate)) {
      return false;
    }
    return true;
  }

  const startDateChange = (e) => {
    setStartDate(e.target.value);
    console.log("Selected date:", startDate);
    validDate() ? null : setEndDate(startDate);
  };

  const endDateChange = (e) => {
    setEndDate(e.target.value);
    console.log("Selected date:", endDate);
    validDate() ? null : setEndDate(startDate);
  };

  console.log(startDate);
  console.log(endDate);
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate)); // difference in milliseconds
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert to days
  console.log(diffDays);

  // calc total price and service fee on 6% (included)
  const totalPrice = diffDays * rental?.pricePerNight;
  const serviceFee = totalPrice * 0.06;

  //Sets policy check to true/false.
  const [policyChecked, setPolicyChecked] = useState(false);
  const handlePolicyCheck = (e) => {
    setPolicyChecked(e.target.checked);
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
          <input type="number" placeholder="Enter the number of guests" />
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
      <Button>
        <h4>RESERVE</h4>
      </Button>
      <h4>You won't be charged yet.</h4>
      <div className="booking-summary vertical">
        <div className="flex-container">
          <div className="fee">
            <h3>
              ${rental?.pricePerNight} x {diffDays}:
            </h3>
          </div>
          <div className="sum">
            <h3>${totalPrice}</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Including Service Fee:</h3>
          </div>
          <div className="sum">
            <h3>${serviceFee}</h3>
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
              <strong>${totalPrice}</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingWindow;
