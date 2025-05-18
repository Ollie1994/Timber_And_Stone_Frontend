import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRentalReviewByRentalId } from "../api/rentalReviewService";
import "../styles/review.css";

// One review and what is included in it
const ReviewCard = ({ username, rating, date, text }) => {
  return (
    <div className="reviewCard-reviewCardContainer">
      <h5>
        {username} - {rating}/5- {date}
      </h5>
      <p>{text}</p>
    </div>
  );
};


// Fetching reviews from API getRentalReviewByRentalId
const Review = ({ sendDataToParent }) => {
  const { id: rentalId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);




  // call bacj func so i can send data from child to parent
    const [data, setData] = useState("");






  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getRentalReviewByRentalId(rentalId);
        setReviews(data);
        // call bacj func so i can send data from child to parent
        sendDataToParent(data);
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
