import Review from "./Review";
import Button from "./Button";
import { useState } from "react";
import "../styles/reviewBox.css"

const ReviewBox = () => {
  // Make the reviewbox hide some reviews
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="reviewBox-reviewsContainer">
      <div className="reviewBox-reviewContainer">
        <div className="reviewBox-reviewsTop">
          <h2>Latest Reviews:</h2>
        </div>
        <div
          className={`reviewBox-reviewContainer ${expanded ? "expanded" : "collapsed"}`}
        >
          <Review />
        </div>
      </div>
      <Button onClick={() => setExpanded(!expanded)} className="reviewBox-showMore">
        <h5>{expanded ? "Show less" : "Show more"}</h5>
      </Button>
    </div>
  );
};

export default ReviewBox;
