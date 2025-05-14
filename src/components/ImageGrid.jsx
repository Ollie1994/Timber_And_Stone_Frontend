import "../styles/imageGrid.css"
import locationIcon from "../assets/location-icon.svg";
import Divider from "./Divider";
import ratingStar from "../assets/rating-star.svg";
import shareIcon from "../assets/share-icon.svg";
import favoriteIcon from "../assets/favorite-icon.svg";
import { getRentalPageById } from "../api/rentalService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ImageGrid = () => {
  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const images = rental?.photos || [];
  //Set css-class depeding on amount of photos.
  const grid =
    images.length === 1
      ? `imageGrid-singleGrid`
      : images.length === 2
      ? "imageGrid-doubleGrid"
      : images.length === 3
      ? "imageGrid-tripleGrid"
      : images.length === 4
      ? "imageGrid-quadGrid"
      : "imageGrid-quintGrid";

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
    <div className="imageGrid-imageContainer">
      {loading ? (
        <h3>Loading...</h3>
      ) : images.length === 0 ? (
        <h3>No images</h3>
      ) : grid === "imageGrid-singleGrid" ? ( //One image
        <div className={grid}>
          <img src={images[0]} alt="" />
        </div>
      ) : grid === "imageGrid-doubleGrid" ? ( //Two images
        <div className={grid}>
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
        </div>
      ) : grid === "imageGrid-tripleGrid" ? ( //Three images
        <div className={grid}>
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
          <img src={images[2]} alt="" />
        </div>
      ) : grid === "imageGrid-quadGrid" ? ( //Four images
        <div className={grid}>
          <div className="imageGrid-halfQuad">
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
          </div>
          <div className="imageGrid-halfQuad">
            <img src={images[2]} alt="" />
            <img src={images[3]} alt="" />
          </div>
        </div>
      ) : (
        // 5 or more (will only show first 5.)
        <div className={grid}>
          <img src={images[0]} alt="" />
          <div className="imageGrid-rightQuint">
            <div className="imageGrid-halfRightQuint">
              <img src={images[1]} alt="" />
              <img src={images[2]} alt="" />
            </div>
            <div className="imageGrid-halfRightQuint">
              <img src={images[3]} alt="" />
              <img src={images[4]} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageGrid;
