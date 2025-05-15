import "../styles/homePage.css";
import { useEffect, useState } from "react";
import { getAllRentalPages } from "../api/homeService";
import SearchBar from "../components/SearchBar";
import HomeListing from "../components/HomeListing";
import { getAllRentalPagesByPriceRange } from "../api/homeService";
// To check for logged in user
import { useAuth } from "../hooks/useAuth";




const HomePage = () => {
  // const for logged in user
  const { isLoggedIn } = useAuth();
  // const for list of all rentals
  const [rentals, setRentals] = useState([]);

  


  const handleDataFromChild = (data) => {
    console.log("Home: " + data.newMinPrice + "-" + data.newMaxPrice)
    const minData = data.newMinPrice
    const maxData = data.newMaxPrice
    /* const newData = data
    setDataFromChild(newData); */
    fetchRentalsByPriceRange(minData, maxData);
  };

  const fetchRentalsByPriceRange = async (minData, maxData) => {
   /*  const minData = dataFromChild.newMinPrice;
    const maxData = dataFromChild.newMaxPrice; */
    try {
      const data = await getAllRentalPagesByPriceRange(minData, maxData);
      console.log(data);
      setRentals(data);
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };







  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const data = await getAllRentalPages();
        setRentals(data);
      } catch (error) {
        console.error("Error fetching rentals:", error);
      }
    };
    fetchRentals();
  }, []);

  

  return (
    <div className="homePage-homeContainer">
      <div className="homePage-searchBarContainer">
        <SearchBar sendDataToParent={handleDataFromChild}></SearchBar>
      </div>
      <div>
        <div className="homePage-homeText">
          {isLoggedIn ? (
            <h2>Welcome back!</h2>
          ) : (
            <h2>Your Dream Getaway starts here</h2>
          )}
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
        <div className="homePage-flexGrid">
          {rentals.map((rental) => (
            <HomeListing key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
