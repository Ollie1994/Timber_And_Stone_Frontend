import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="home-container">
    <div className="home-text">
      <h2>Your Dream Getaway starts here</h2>
      <br />
      <article>
        Explore our cabins, cottages + off-grid retreats to start your next
        <br />
        adventure or find your favorite hideaway. <br />
        See our handpicked recommendations below or use the searchbar
        <br />
        above to find just what you're looking for!
      </article>
      <br />
      </div>
      <div className="flex-grid">
  <div className="col">
    <div className="col-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </div>
  </div>
  <div className="col"></div>
  <div className="col"></div>
  <div className="col"></div>
  <div className="col"></div>
  <div className="col"></div>
</div> 
    </div>
  );
};
export default HomePage;
