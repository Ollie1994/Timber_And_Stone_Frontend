import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRentalReviewByRentalId } from "../api/rentalReviewService";
import "../styles/review.css"

// One review and what is included in it
const ReviewCard = ({ username, rating, date, text }) => {
    return (
      <div className="reviewCard-reviewCardContainer">
        <div className="reviewCard-halfContainer">
          <h3>{username}</h3>
          <h3>-</h3>
          <h3>{rating}/5</h3>
          <h3>-</h3>
          <h3>{date}</h3>
        </div>
        <br/>
        <div className="reviewCard-halfContainer">
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

    // Checks if there are any reviews and maps over any existing reviews and shows a ReviewCard for it
    // or will display no reviews if none exist
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
              date={review.createdAt}
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