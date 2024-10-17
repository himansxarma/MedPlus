import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is the hook used for navigation in React Router v6

function BannerAndShop() {
  const navigate = useNavigate(); // React Router v6 hook for navigation
  const [activeIndex, setActiveIndex] = useState(0); // State for the active banner image
  const [hoveredCategory, setHoveredCategory] = useState(null); // State for hovered category

  // Array of banner images
  const bannerImages = [
    `${process.env.PUBLIC_URL}/images/banner4.jpeg`,
    `${process.env.PUBLIC_URL}/images/banner2.jpg`,
    `${process.env.PUBLIC_URL}/images/banner3.png`,
  ];

  // Function to auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [bannerImages.length]);

  // Styles
  const mainContentStyle = {
    width: "100%", // Full width of the viewport
    height: "400px", // Adjust the height as needed
    margin: "0", // Remove any margins
    position: "relative",
    overflow: "hidden", // Hide overflow to keep banner tidy
  };

  const bannerImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure image covers the section fully
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 0.5s ease-in-out",
    opacity: 0, // Default to hidden
  };

  const activeBannerImgStyle = {
    ...bannerImgStyle,
    opacity: 1, // Only the active image is visible
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
    margin: "10px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, background-color 0.3s",
    cursor: "pointer",
  };

  // Add hover effect color
  const cardHoverStyle = {
    ...cardStyle,
    backgroundColor: "#339989", // Same color as the header
    color: "white", // Change text color to white for contrast
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
    flexWrap: "wrap",
  };

  const categoryCardStyle = {
    backgroundColor: "white",
    width: "150px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, background-color 0.3s",
  };

  const categoryHoverStyle = {
    ...categoryCardStyle,
    backgroundColor: "#339989",
    color: "white",
  };

  // Function to handle click and navigate to the medicine page
  const handleMedicineClick = () => {
    navigate("/medicine");
  };

  // Function to handle click and navigate to the prescription page
  const handlePrescriptionClick = () => {
    navigate("/prescription");
  };

  // State for tracking hovered card
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      {/* Banner Section with 3 auto-rotating images */}
      <div style={mainContentStyle}>
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            style={index === activeIndex ? activeBannerImgStyle : bannerImgStyle}
          />
        ))}
      </div>

      {/* Card Section with Medicine and Prescription */}
      <div style={cardSectionStyle}>
        <div
          style={hoveredCard === "medicine" ? cardHoverStyle : cardStyle}
          onMouseEnter={() => setHoveredCard("medicine")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={handleMedicineClick}
        >
          <img
            src="images/medicine.png"
            alt="Medicine"
            style={cardImgStyle}
          />
          <div style={cardTitleStyle}>Medicine</div>
        </div>

        {/* Prescription Card */}
        <div
          style={hoveredCard === "prescription" ? cardHoverStyle : cardStyle}
          onMouseEnter={() => setHoveredCard("prescription")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={handlePrescriptionClick} // Trigger navigation to Prescription page
        >
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
          <div style={categoryRowStyle}>
            <div
              style={hoveredCategory === "vitamins" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("vitamins")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img
                src="images/vitamins.png"
                alt="Vitamin"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Vitamins</h3>
            </div>
            <div
              style={hoveredCategory === "hygiene" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("hygiene")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img
                src="images/hygiene.png"
                alt="Hygiene"
                style={cardImgStyle}
              />
              <h3 style={cardTitleStyle}>Hygiene</h3>
            </div>
            <div
              style={hoveredCategory === "femaleHealth" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("femaleHealth")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/wh.png" alt="Female Health" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Female Health</h3>
            </div>
            <div
              style={hoveredCategory === "beauty" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("beauty")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/beauty.png" alt="Beauty" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Beauty</h3>
            </div>
          </div>
          {/* Row 2 */}
          <div style={categoryRowStyle}>
            <div
              style={hoveredCategory === "skincare" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("skincare")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/skincare.png" alt="Skincare" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Skincare</h3>
            </div>
            <div
              style={hoveredCategory === "menCare" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("menCare")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/men care.png" alt="Men Care" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Men Care</h3>
            </div>
            <div
              style={hoveredCategory === "facewash" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("facewash")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/facewash.png" alt="Facewash" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Facewash</h3>
            </div>
            <div
              style={hoveredCategory === "dailyEssentials" ? categoryHoverStyle : categoryCardStyle}
              onMouseEnter={() => setHoveredCategory("dailyEssentials")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <img src="images/daily.png" alt="Daily Essentials" style={cardImgStyle} />
              <h3 style={cardTitleStyle}>Daily Essentials</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAndShop;
