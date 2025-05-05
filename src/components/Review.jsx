const Review = ({ username, rating, date, text }) => {
    return (
      <div className="review">
        <div className="half-container">
          <h3>{username}</h3>
          <h3>-</h3>
          <h3>{rating}</h3>
          <h3>-</h3>
          <h3>{date}</h3>
        </div>
        <div className="half-container">
          <p>{text}</p>
        </div>
      </div>
    );
  };
  
  export default Review;