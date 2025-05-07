import "../styles/home.css";
import { getRentalPagesById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HomeListing = () => {
  const { id } = useParams();
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(null);

  // Only the first image in the array of photos will show
  const rentalImage = rental.photos?.[0];

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalPagesById(id);
        setRental(data);
      } catch (err) {
        console.error("Error fetching listing:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchListing();
  }, []);
  return (
    <div className="col">
      <img className="rentalImage" src={rentalImage} alt="RentalImage" />
      <div style={{ flexGrow: 1 }} />
      <div className="col-text">
        <div className="col-location">{rental.adress.city}, {rental.adress.country}</div>
        <div className="col-title">{rental.title}</div>
        <div className="col-category">{rental.category}</div>
        <div className="col-rating">Rating: {rental.rating}</div>
        <div className="col-description">{rental.description}</div>
      </div>
    </div>
  );
};

export default HomeListing;