import "../styles/home.css";
import { useNavigate } from "react-router-dom";

// Single HomeListing and what it should contain
const HomeListing = ({ rental }) => {
  const rentalImage = rental.photos?.[0];
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/rentalpage/${rental.id}`);
  };

  return (
    <div className="col" onClick={handleNavigate}>
      <img className="rentalImage" src={rentalImage} alt={rental.title} />
      <div className="col-text">
        <div className="col-location">
          {rental.city}, {rental.country}
        </div>
        <div className="col-title">{rental.title}</div>
        <div className="col-category">{rental.category}</div>
        <div className="col-rating">Rating: {rental.averageRating}</div>
        <div className="col-description">{rental.description}</div>
      </div>
    </div>
  );
};

export default HomeListing;

/* const { id } = useParams();
const [rental, setRental] = useState(null);
const [loading, setLoading] = useState(true);

// Only the first image in the array of photos will show
const rentalImage = rental.photos?.[0];

useEffect(() => {
  const fetchRental = async () => {
    try {
      const data = await getAllRentalPages();
      setRental(data);
    } catch (err) {
      console.error("Error fetching listing:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchRental();
}, []);
 */

/* 
<div className="col">
      <img className="rentalImage" src={rentalImage} alt="RentalImage" />
      <div style={{ flexGrow: 1 }} />
      <div className="col-text">
        <div className="col-location">
          {rental.adress.city}, {rental.adress.country}
        </div>
        <div className="col-title">{rental.title}</div>
        <div className="col-category">{rental.category}</div>
        <div className="col-rating">Rating: {rental.rating}</div>
        <div className="col-description">{rental.description}</div>
      </div>
    </div> */
