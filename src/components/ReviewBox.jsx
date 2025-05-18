import Review from "./Review";
import Button from "./Button";
import { useState } from "react";
import "../styles/reviewBox.css"

const ReviewBox = () => {
  // Make the reviewbox hide some reviews
  const [expanded, setExpanded] = useState(false);

// call bacj func so i can send data from child to parent
  const [dataFromChild, setDataFromChild] = useState("");
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }






  return (
    <div className="reviewBox-reviewsContainer">
      <div className="reviewBox-reviewContainer">
        <div className="reviewBox-reviewsTop">
          <h2>Latest Reviews:</h2>
        </div>
        <div
         
        >
          <Review sendDataToParent={handleDataFromChild} />
        </div>
      </div>
      <div className={`reviewBox-buttonContainer ${
          dataFromChild.length != 0 ? "expanded" : "collapsed"
        }`}>
      <Button onClick={() => setExpanded(!expanded)}>
        <h5>{expanded ? "Show less" : "Show more"}</h5>
      </Button>
      </div>
    </div>
  );
};

export default ReviewBox;
