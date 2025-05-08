import "../styles/home.css";
import { useEffect, useState } from "react";
import { getAllRentalPages } from "../api/homeService";
import { HomeListingCard } from "../components/HomeListing";

// To check for logged in user
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  // const for logged in user
  const { isLoggedIn } = useAuth();
  // const for list of all rentals
  const [rentals, setRentals] = useState([]);

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
    <div className="home-container">
      <div>
        <div className="home-text">
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
        <div className="flex-grid">
          {rentals.map((rental) => (
            <HomeListingCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
