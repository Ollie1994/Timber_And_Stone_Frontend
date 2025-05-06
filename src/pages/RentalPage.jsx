import "../styles/rental.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";
import RentalTitleSection from "../components/RentalTitleSection";
import Review from "../components/Review";

const RentalPage = () => {
  return (
    <div className="full-container">
      <div className="inner-container">
        <RentalTitleSection></RentalTitleSection>

        <div className="images-container">
          <div className="main-image-container">
            <img
              className="rental-image"
              src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
              alt="Main Image of the rental"
            />
          </div>
          <div className="grid-container">
            <div className="image-flexbox">
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
            </div>
            <div className="image-flexbox">
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
            </div>
          </div>
        </div>

        <IconRow></IconRow>

        <svg
          className="line"
          viewBox="0 0 1280 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H1280" stroke="#3C4634" strokeWidth="3" />
        </svg>

        <div className="flex-container vertical">
          <p className="description">
            A whimsical treehouse nestled in the forests of Bavaria, Germany.
            The treehouse is elevated in the treetops, with large windows
            offering a view of the dense green canopy below. The design is
            modern and minimalist, with wooden accents and a spacious deck. The
            atmosphere is peaceful, with birds chirping and sunlight filtering
            through the leaves, creating a calming, nature-filled retreat.{" "}
            <br />
            <br />
            Surrounded by towering pines and the gentle rustle of leaves, the
            treehouse offers a rare kind of stillness—where time slows, and the
            outside world feels miles away. Inside, the space is thoughtfully
            designed to invite calm: clean lines, soft textures, and warm
            natural materials come together to create a sanctuary that’s both
            simple and deeply comforting. Mornings begin with golden light
            spilling through the trees, casting gentle patterns on the wooden
            floors, while evenings invite you to unwind on the deck under a
            canopy of stars. <br />
            <br /> As your host, I’m Fritz—and this treehouse is my heart and
            hands in one place. I designed and built it myself, board by board,
            with the intention of creating something rooted in both simplicity
            and soul. Every curve, window, and wooden joint was shaped with
            care, guided by the forest around it. I’m passionate about slow
            living and deep rest, and I believe spaces can heal us when they’re
            made with love. Whether you're here to write, wander, or just listen
            to the wind move through the pines, I’ll make sure you feel truly at
            home. You’ll often find me nearby—tending the garden, baking bread,
            or happy to share a story over a warm drink.
          </p>
          <div className="flex-container right">
            <Button>
              <h4>Show more...</h4>
            </Button>
          </div>
        </div>

        <svg
          className="line"
          viewBox="0 0 1280 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H1280" stroke="#3C4634" strokeWidth="3" />
        </svg>

        <div className="flex-container">
          <div className="half-container vertical left">
            <div className="inset">
              <div className="half-container">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2566 2.83331H7.56492C4.46242 2.83331 2.83325 4.46248 2.83325 7.55081V10.2425C2.83325 13.3308 4.46242 14.96 7.55075 14.96H10.2424C13.3308 14.96 14.9599 13.3308 14.9599 10.2425V7.55081C14.9741 4.46248 13.3449 2.83331 10.2566 2.83331Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M26.4492 2.83331H23.7575C20.6692 2.83331 19.04 4.46248 19.04 7.55081V10.2425C19.04 13.3308 20.6692 14.96 23.7575 14.96H26.4492C29.5375 14.96 31.1667 13.3308 31.1667 10.2425V7.55081C31.1667 4.46248 29.5375 2.83331 26.4492 2.83331Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M26.4492 19.0258H23.7575C20.6692 19.0258 19.04 20.655 19.04 23.7433V26.435C19.04 29.5233 20.6692 31.1525 23.7575 31.1525H26.4492C29.5375 31.1525 31.1667 29.5233 31.1667 26.435V23.7433C31.1667 20.655 29.5375 19.0258 26.4492 19.0258Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M10.2566 19.0258H7.56492C4.46242 19.0258 2.83325 20.655 2.83325 23.7433V26.435C2.83325 29.5375 4.46242 31.1667 7.55075 31.1667H10.2424C13.3308 31.1667 14.9599 29.5375 14.9599 26.4492V23.7575C14.9741 20.655 13.3449 19.0258 10.2566 19.0258Z"
                    fill="#3C4634"
                  />
                </svg>
                <h2>What this place offers:</h2>
              </div>

              <div className="amenities-container">
                <div className="half-container vertical">
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="half-container vertical">
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-container space"></div>

            <div className="reviews-container vertical left">
              <div className="half-container reviews-top">
                <h3>Latest Reviews:</h3>
                <Button>
                  <h4>Show More...</h4>
                </Button>
              </div>

              <div className="flex-container review-container vertical">
              <Review></Review>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="inner-form-container">
              <h2>£100/night</h2>
              <div className="booking-form">
                <div className="input-container">
                  <div className="date-inputs">
                    <div className="start-date">
                      <h5>CHECK-IN</h5>
                      <input type="date" defaultValue="2026-01-01" />
                    </div>
                    <div className="end-date">
                      <h5>CHECK-OUT</h5>
                      <input type="date" defaultValue="2026-01-02" />
                    </div>
                  </div>
                  <div className="guests-input">
                    <h5>GUESTS:</h5>
                    <input
                      type="number"
                      placeholder="Amount of guests (max 2)"
                    />
                  </div>
                </div>
                <label className="policy-container">
                  <input type="checkbox" />
                  <h5>I accept the</h5>
                  <h5 className="policy">
                    <strong>Policy</strong>
                  </h5>
                </label>
                <Button>
                  <h4>RESERVE</h4>
                </Button>
                <h4>You won't be charged yet.</h4>
                <div className="booking-summary vertical">
                  <div className="flex-container">
                    <div className="fee">
                      <h3>£100</h3>
                      <h3>x</h3>
                      <h3>10</h3>
                      <h3>nights</h3>
                    </div>
                    <div className="sum">
                      <h3>£1000</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Discount:</h3>
                    </div>
                    <div className="sum">
                      <h3>-</h3>
                      <h3>£10</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Cleaning fee</h3>
                    </div>
                    <div className="sum">
                      <h3>£50</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Service Fee</h3>
                    </div>
                    <div className="sum">
                      <h3>£30</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Occupancy taxes and fees</h3>
                    </div>
                    <div className="sum">
                      <h3>£20</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>
                        <strong>Total:</strong>
                      </h3>
                    </div>
                    <div className="sum">
                      <h3>
                        <strong>£1090</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalPage;
