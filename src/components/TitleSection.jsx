import "../styles/titleSection.css"
import locationIcon from "../assets/location-icon.svg";
import Divider from "./Divider";
import ratingStar from "../assets/rating-star.svg";
import shareIcon from "../assets/share-icon.svg";
import favoriteIcon from "../assets/favorite-icon.svg";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TitleSection = () => {
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
    <div>
      <div className="flex-container vertical">
        <h2>
          {
            //Check that the title exists, if not check loading, else untitled.
            rental?.title || (loading ? "Loading..." : "Untitled")
          }
        </h2>
        <div className="flex-container h-left h-center">
          <img src={locationIcon} alt="Location Icon" />
          <h4>
            {
              //check address exists, else check loading, else unknown if neither existing or loading.
              rental?.address?.city && rental?.address?.country
                ? `${rental.address.city}, ${rental.address.country}`
                : loading
                ? "Loading..."
                : "Unknown Location"
            }
          </h4>
        </div>
      </div>
      <Divider />
      <div className="flex-container h-space-between">
        <div className="half-container">
          <img src={ratingStar} alt="Star Icon" />
          <h4>
            {
              // Check if rating exists
              rental?.rating
                ? // Check if there are any ratings
                  rental.rating.numberOfRatings > 0
                  ? // If there is, show the rating and average rating
                    `${rental.rating.averageRating}/5 · ${rental.rating.numberOfRatings} Reviews`
                  : // Else
                    "No reviews yet"
                : loading
                ? // If rating is still loading
                  "Loading..."
                : // If rating is finished loading and did not exist.
                  "N/A"
            }
          </h4>
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

export default TitleSection;
