import "../styles/homeListing.css";
import { useNavigate } from "react-router-dom";

// Single HomeListing and what it should contain
const HomeListing = ({ rental }) => {
  const rentalImage = rental.photos?.[0];
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/rentalpage/${rental.id}`);
  };

  return (
    <div className="homeListing-col" onClick={handleNavigate}>
      <img src={rentalImage} alt={rental.title} />
      <div className="homeListing-colText">
        <div className="homeListing-colLocation">
          {rental.city}, {rental.country}
        </div>
        <div className="homeListing-colTitle">{rental.title}</div>
        <div className="homeListing-colCategory">{rental.category}</div>
        <div className="homeListing-colRating">Rating: {rental.averageRating}</div>
        <div className="homeListing-colDescription">{rental.description}</div>
      </div>
    </div>
  );
};

export default HomeListing;

