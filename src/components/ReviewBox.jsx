import Review from "./Review";

const ReviewBox = () => {
    return (
        <div className="reviews-container">
      <div className="review-container">
        <div className="reviews-top">
          <h2>Latest Reviews</h2>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default ReviewBox;