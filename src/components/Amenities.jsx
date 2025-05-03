import "../styles/amenities.css";
import amenity from "../assets/amenity.svg";
import { getRentalById } from "../api/rentalService";
import { useState, useEffect } from "react";

const Amenities = () => {
  const [rental, setRental] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalById("6816169ac4033371cab39f8e");
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
    <div className="groupContainer">
      <div className="columnContainer">
        <div className="amenitiesContainer">
          <div className="amenity">
            <img src={amenity} alt="Amenity icon"></img>
            <div className="textContainer">
              <h3>Kitchen</h3>
              <p>Description of the kitchen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Amenities;
