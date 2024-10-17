import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is the hook used for navigation in React Router v6

function BannerAndShop() {
  const navigate = useNavigate(); // React Router v6 hook for navigation

  const mainContentStyle = {
    width: "100vw", // Full width of the viewport
    height: "400px", // Adjust the height as needed
    margin: "0", // Remove any margins
  };

  const bannerImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure image covers the section fully
    margin: "0", // No margins
    padding: "0", // No padding
  };

  const cardSectionStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
    flexWrap: "wrap", // Ensure cards wrap on smaller screens
  };

  const cardStyle = {
    backgroundColor: "white",
    width: "250px",
    padding: "20px",
    margin: "10px", // Reduced margin to fit better on small screens
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    cursor: "pointer",
  };

  const cardImgStyle = {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
  };

  const cardTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const shopByCategoryStyle = {
    textAlign: "center",
    margin: "30px 0",
  };

  const categoryCarouselStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const categoryRowStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    flexWrap: "wrap", // Allows the category cards to wrap in smaller screens
  };

  const categoryCardStyle = {
    backgroundColor: "white",
    width: "150px",
    padding: "10px",
    margin: "10px", // Adjusted margin for responsiveness
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const categoryCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
  };

  const categoryCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  // Function to handle click and navigate to the medicine page
  const handleMedicineClick = () => {
    navigate("/medicine"); // Navigate to /medicine
  };

  return (
    <div>
      {/* Banner Section */}
      <div style={mainContentStyle}>
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
          alt="Banner"
          style={bannerImgStyle}
        />
      </div>

      {/* Card Section with Medicine and Prescription */}
      <div style={cardSectionStyle}>
        {/* Medicine Card */}
        <div style={cardStyle} onClick={handleMedicineClick}>
          <img
            src="images/medicine.png"
            alt="Medicine"
            style={cardImgStyle}
          />
          <div style={cardTitleStyle}>Medicine</div>
        </div>

        {/* Prescription Card */}
        <div style={cardStyle}>
          <img
            src="images/prescription.png"
            alt="Prescription"
            style={cardImgStyle}
          />
          <div style={cardTitleStyle}>Prescription</div>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div style={shopByCategoryStyle}>
        <h2>Shop by Category</h2>
        <div style={categoryCarouselStyle}>
          {/* Row 1 */}
          <div style={categoryRowStyle}>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/vitamins.png"
                alt="Vitamin"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Vitamins</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/hygiene.png"
                alt="Hygiene"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Hygiene</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/wh.png"
                alt="Female Health"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Female Health</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/beauty.png"
                alt="Beauty"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Beauty</h3>
            </div>
          </div>
          {/* Row 2 */}
          <div style={categoryRowStyle}>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/skincare.png"
                alt="Skincare"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Skincare</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/men care.png"
                alt="Men Care"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Men Care</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/facewash.png"
                alt="Facewash"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Facewash</h3>
            </div>
            <div
              style={categoryCardStyle}
              onMouseEnter={categoryCardHover}
              onMouseLeave={categoryCardLeave}
            >
              <img
                src="images/daily.png"
                alt="Daily Essentials"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Daily Essentials</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAndShop;
