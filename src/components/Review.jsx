import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRentalReviewByRentalId } from "../api/rentalReviewService";

// One review and what is included in it
const ReviewCard = ({ username, rating, date, text }) => {
    return (
      <div className="review">
        <div className="half-container">
          <h3>{username}</h3>
          <h3>-</h3>
          <h3>{rating}/5</h3>
          <h3>-</h3>
          <h3>{date}</h3>
        </div>
        <div className="half-container">
          <p>{text}</p>
        </div>
      </div>
    );
  };

  // Fetching reviews from API getRentalReviewByRentalId
  const Review = () => {
    const { id: rentalId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const data = await getRentalReviewByRentalId(rentalId);
          setReviews(data);
        } catch (err) {
          console.error("Failed to fetch reviews:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchReviews();
    }, [rentalId]);

    return (
      <>
        {loading ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard
              key={index}
              username={review.reviewer}
              rating={review.rating}
              date={review.date}
              text={review.review}
            />
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </>
    );
  };
  
  export default Review;