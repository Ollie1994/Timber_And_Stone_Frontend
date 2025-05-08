import Review from "./Review";
import Button from "./Button";
import { useState } from "react";

const ReviewBox = () => {
  // Make the reviewbox hide some reviews
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="reviews-container">
      <div className="review-container">
        <div className="reviews-top">
          <h2>Latest Reviews:</h2>
        </div>
        <div
          className={`review-container ${expanded ? "expanded" : "collapsed"}`}
        >
          <Review />
        </div>
      </div>
      <Button onClick={() => setExpanded(!expanded)}>
        <h4>{expanded ? "Show less" : "Show more"}</h4>
      </Button>
    </div>
  );
};

export default ReviewBox;
