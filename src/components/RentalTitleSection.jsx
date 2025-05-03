import locationIcon from "../assets/location-icon.svg";
import Divider from "./Divider";
import ratingStar from "../assets/rating-star.svg";
import shareIcon from "../assets/share-icon.svg";
import favoriteIcon from "../assets/favorite-icon.svg";
import { getRentalById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RentalTitleSection = () => {
  const [rental, setRental] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalById(id);
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
    <div>
      <div className="flex-container vertical">
        <h2>{rental.title}</h2>
        <div className="flex-container h-left h-center">
          <img src={locationIcon} alt="Location Icon" />
          <h4>
            {rental.city}, {rental.country}
          </h4>
        </div>
      </div>

      <Divider />

      <div className="flex-container h-space-between">
        <div className="half-container">
          <img src={ratingStar} alt="Star Icon" />
          <h4>{rental.averageRating}/5</h4>
          <h4>X Reviews</h4>
        </div>
        <div className="half-container">
          <img src={shareIcon} alt="Share Icon" />
          <h4>SHARE</h4>
          <img src={favoriteIcon} alt="Favorite Icon" />
          <h4>FAVORITE</h4>
        </div>
      </div>
    </div>
  );
};

export default RentalTitleSection;
