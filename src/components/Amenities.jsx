import "../styles/amenities.css";
import amenityIcon from "../assets/amenity.svg";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Amenities = () => {
  const [rental, setRental] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState("popupNone");
  const { id } = useParams();


  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalPageById(id);
        setRental(data);
        setAmenities(data.amenities);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchRental();
  }, []);

  return (
    <div className="Container">
      <button className="openButton" onClick={() => setPopup("popupBlock")}>
        <h6>Amenities</h6>
      </button>

      <div className={popup}>
        <div className="amenitiesContainer">
          {amenities.length > 0 ? (
            amenities.map((amenity) => (
              <div key={amenity.amenityTitle}>
                {amenity.amenityTitle && (
                  <div className="amenity">
                    <div className="amenityIcon">
                      <img src={amenityIcon} alt="Amenity icon"></img>
                    </div>
                    <div className="textContainer">
                      <p className="amenityTitle">{amenity.amenityTitle}</p>
                      <p className="amentiyDescription">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>No matching amens</div>
          )}
        </div>

        <button
          type="button"
          className="closeButton"
          onClick={() => setPopup("popupNone")}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Amenities;
