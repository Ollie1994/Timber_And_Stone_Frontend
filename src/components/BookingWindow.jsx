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

  return (
    <div className="booking-window">
      <h1>${rental?.pricePerNight}/night</h1>

      <div className="input-container">
        <div className="date-inputs">
          <div className="start-date">
            <h5>CHECK-IN</h5>
            <input type="date" defaultValue="2026-01-01" />
          </div>
          <div className="end-date">
            <h5>CHECK-OUT</h5>
            <input type="date" defaultValue="2026-01-02" />
          </div>
        </div>
        <div className="guests-input">
          <h5>GUESTS:</h5>
          <input type="number" placeholder="Enter the number of guests" />
        </div>
      </div>

      <label className="policy-container">
        <input type="checkbox" />
        <h5>I accept the</h5>
        <h5 className="policy">
          <strong>Policy</strong>
        </h5>
      </label>
      <Button>
        <h4>RESERVE</h4>
      </Button>
      <h4>You won't be charged yet.</h4>
      <div className="booking-summary vertical">
        <div className="flex-container">
          <div className="fee">
            <h3>£100</h3>
            <h3>x</h3>
            <h3>10</h3>
            <h3>nights</h3>
          </div>
          <div className="sum">
            <h3>£1000</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Discount:</h3>
          </div>
          <div className="sum">
            <h3>-</h3>
            <h3>£10</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Cleaning fee</h3>
          </div>
          <div className="sum">
            <h3>£50</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Service Fee</h3>
          </div>
          <div className="sum">
            <h3>£30</h3>
          </div>
        </div>
        <div className="flex-container">
          <div className="fee">
            <h3>Occupancy taxes and fees</h3>
          </div>
          <div className="sum">
            <h3>£20</h3>
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
              <strong>£1090</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingWindow;
