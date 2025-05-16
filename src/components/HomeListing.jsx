import "../styles/homeListing.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// Single HomeListing and what it should contain
const HomeListing = ({ rental }) => {
  const rentalImage = rental.photos?.[0];
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/rentalpage/${rental.id}`);
  };

  return (
    <div className="homeListing-col" onClick={handleNavigate}>
      <Button className="homeListing-colCategory">
        <h6>{rental.category}</h6>
      </Button>
      <img src={rentalImage} alt={rental.title} />
      <div className="homeListing-colText">
        <div className="homeListing-colLocationRating">
          <h5>
            {rental.city}, {rental.country}{" "}
          </h5>
          <h6>Rating: {rental.averageRating}</h6>
        </div>
        <div className="homeListing-colTitle">
          <h4>{rental.title}</h4>
        </div>
        <div className="homeListing-colDescription">
          <p>{rental.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeListing;
