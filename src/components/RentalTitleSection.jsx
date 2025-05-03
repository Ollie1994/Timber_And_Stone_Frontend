import locationIcon from "../assets/location-icon.svg";
import Divider from "./Divider";
import ratingStar from "../assets/rating-star.svg";
import shareIcon from "../assets/share-icon.svg";
import favoriteIcon from "../assets/favorite-icon.svg";

const RentalTitleSection = () => {
  return (
    <div>
      <div className="flex-container vertical">
        <h2>Title</h2>
        <div className="flex-container h-left h-center">
          <img src={locationIcon} alt="Location Icon" />
          <h4>City, Country</h4>
        </div>
      </div>

      <Divider />

      <div className="flex-container h-space-between">
        <div className="half-container">
          <img src={ratingStar} alt="Star Icon" />
          <h5>X/5</h5>
          <h5>X Reviews</h5>
        </div>
        <div className="half-container">
          <img src={shareIcon} alt="Share Icon" />
          <h5>SHARE</h5>
          <img src={favoriteIcon} alt="Favorite Icon" />
          <h5>FAVORITE</h5>
        </div>
      </div>
    </div>
  );
};

export default RentalTitleSection;
