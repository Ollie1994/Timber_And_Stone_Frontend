import "../styles/amenities.css";
import amenityIcon from "../assets/amenity.svg";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button"


const Amenities = () => {
  const [rental, setRental] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState("amenities-popupNone");
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
    <div className="amenities-amentiesContainer">
    <div className="amenities-buttonContainer">
      <button className="amenities-openButton" onClick={() => 
        popup === "amenities-popupBlock" ? setPopup("amenities-popupNone") :  setPopup("amenities-popupBlock")}>
        <h5>{popup === "amenities-popupBlock" ? "Minimise Amenites" : "Expand Amenities"}</h5>
      </button>
      </div>
      <div className="amenities-listContainer">
      <div className={popup}>
        <div className="amenities-amenitiessContainer">
          {amenities.length > 0 ? (
            amenities.map((amenity) => (
              <div key={amenity.amenityTitle}>
                {amenity.amenityTitle && (
                  <div className="amenities-amenity">
                    <div className="amenities-amenityIcon">
                      <img src={amenityIcon} alt="Amenity icon"></img>
                    </div>
                    <div className="amenities-textContainer">
                      <p className="amenities-amenityTitle">{amenity.amenityTitle}</p>
                      <p className="amenities-amentiyDescription">
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
      </div>
      </div>
    </div>
  );
};
export default Amenities;
