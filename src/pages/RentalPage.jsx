import "../styles/rental.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";

const RentalPage = () => {
  return (
    <div className="full-container">
      <div className="inner-container">
        <div className="title-container">
          <div className="flex-container space"></div>
          <h2 className="rental-title">Title</h2>
          <div className="flex-container space"></div>
          <div className="address-container">
            <svg
              className="address-logo"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4163 7.0601C15.7038 6.92326 16.0001 7.16016 16.0001 7.47848V35.1428C16.0001 35.3661 15.8505 35.5586 15.6429 35.6408C15.5071 35.6945 15.3806 35.7542 15.2601 35.82L10.5601 38.5C7.28008 40.38 4.58008 38.82 4.58008 35.02V15.56C4.58008 14.3 5.48008 12.74 6.60008 12.1L15.2601 7.13999C15.311 7.1122 15.363 7.08549 15.4163 7.0601Z"
                fill="#3C4634"
              />
              <path
                d="M29.7219 12.3423C29.8922 12.4267 30 12.6003 30 12.7904V40.2029C30 40.5714 29.615 40.8133 29.283 40.6533L19.783 36.0764C19.61 35.993 19.5 35.8179 19.5 35.6259V8.0856C19.5 7.71475 19.8896 7.47296 20.2219 7.63754L29.7219 12.3423Z"
                fill="#3C4634"
              />
              <path
                d="M44 12.98V32.44C44 33.7 43.1 35.26 41.98 35.9L34.2486 40.331C33.9153 40.522 33.5 40.2813 33.5 39.8972V12.3703C33.5 12.1908 33.5962 12.0251 33.7521 11.9361L38.02 9.50001C41.3 7.62001 44 9.18001 44 12.98Z"
                fill="#3C4634"
              />
            </svg>
            <h4 className="address-text">City, Country</h4>
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
          <div className="half-container">
            <svg
              className="review-star"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3671 2.38535L22.2754 8.24099C22.6673 9.05081 23.7192 9.81911 24.6062 9.98522L29.8659 10.8573C33.228 11.418 34.0118 13.8682 31.5985 16.3185L27.4939 20.4506C26.8132 21.1359 26.4213 22.4856 26.6482 23.4615L27.8239 28.5696C28.7521 32.598 26.6069 34.1761 23.0798 32.0581L18.1501 29.1095C17.2632 28.5696 15.7781 28.5696 14.8911 29.1095L9.96143 32.0581C6.43431 34.1553 4.28917 32.598 5.21735 28.5696L6.39306 23.4615C6.5787 22.4648 6.1868 21.1151 5.50612 20.4299L1.40147 16.2977C-1.01182 13.8682 -0.228017 11.418 3.13409 10.8366L8.39382 9.96446C9.28076 9.81911 10.3327 9.03005 10.7246 8.22023L13.6329 2.36458C15.2212 -0.791647 17.7788 -0.791647 19.3671 2.38535Z"
                fill="#3C4634"
              />
            </svg>
            <h5>X/5</h5>
            <h5>X Reviews</h5>
          </div>
          <div className="half-container">
            <svg
              className="share-icon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_145_870)">
                <path
                  d="M20.625 4.68748C20.6249 3.58767 21.0115 2.52282 21.7171 1.67925C22.4228 0.835678 23.4026 0.267098 24.4852 0.0729855C25.5677 -0.121126 26.6841 0.071591 27.6389 0.61742C28.5937 1.16325 29.3262 2.02743 29.7082 3.05877C30.0902 4.09012 30.0974 5.22294 29.7285 6.25905C29.3596 7.29516 28.6382 8.16858 27.6904 8.7265C26.7426 9.28441 25.6288 9.49129 24.5439 9.31095C23.4589 9.13061 22.472 8.57452 21.7556 7.73998L9.15938 13.59C9.44896 14.5077 9.44896 15.4923 9.15938 16.41L21.7556 22.26C22.5128 21.3793 23.57 20.8112 24.7222 20.6656C25.8745 20.52 27.0398 20.8073 27.9922 21.4719C28.9447 22.1365 29.6165 23.131 29.8775 24.2627C30.1385 25.3944 29.9701 26.5827 29.4049 27.5973C28.8396 28.6119 27.9179 29.3805 26.8183 29.7543C25.7186 30.128 24.5194 30.0802 23.453 29.6201C22.3866 29.1601 21.529 28.3205 21.0463 27.2641C20.5637 26.2077 20.4904 25.0098 20.8406 23.9025L8.24438 18.0525C7.62082 18.7792 6.78966 19.2975 5.86272 19.5376C4.93577 19.7778 3.9575 19.7283 3.05952 19.3959C2.16153 19.0634 1.3869 18.4639 0.839835 17.678C0.292769 16.8921 -0.000488281 15.9575 -0.000488281 15C-0.000488281 14.0424 0.292769 13.1078 0.839835 12.3219C1.3869 11.536 2.16153 10.9365 3.05952 10.6041C3.9575 10.2716 4.93577 10.2221 5.86272 10.4623C6.78966 10.7025 7.62082 11.2208 8.24438 11.9475L20.8406 6.09748C20.6972 5.64123 20.6245 5.16573 20.625 4.68748Z"
                  fill="#3C4634"
                />
              </g>
              <defs>
                <clipPath id="clip0_145_870">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5>SHARE</h5>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 28C14.5368 27.9994 14.0845 27.8579 13.702 27.5939C8.03475 23.7037 5.58079 21.0365 4.22726 19.3689C1.3428 15.8142 -0.0381395 12.1647 0.000800739 8.2126C0.046231 3.68375 3.63955 0 8.01095 0C11.1896 0 13.3912 1.81052 14.6733 3.31844C14.714 3.36572 14.7641 3.40364 14.8205 3.42963C14.8768 3.45561 14.9381 3.46906 15 3.46906C15.0619 3.46906 15.1232 3.45561 15.1795 3.42963C15.2359 3.40364 15.2861 3.36572 15.3267 3.31844C16.6088 1.80906 18.8104 0 21.9891 0C26.3605 0 29.9538 3.68375 29.9992 8.21333C30.0381 12.1661 28.6558 15.8156 25.7727 19.3696C24.4192 21.0372 21.9653 23.7045 16.298 27.5946C15.9154 27.8584 15.4631 27.9996 15 28Z"
                fill="#3C4634"
              />
            </svg>
            <h5>FAVORITE</h5>
          </div>
        </div>

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
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
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
