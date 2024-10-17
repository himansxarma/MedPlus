import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // This hook allows navigation

  const headerStyle = {
    backgroundColor: "#339989",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center", // Ensures the logo and company name are in the same line
  };

  const logoStyle = {
    height: "40px",
    marginRight: "10px", // Add some spacing between the logo and text
  };

  const companyNameStyle = {
    fontSize: "24px",
    color: "white",
    fontWeight: "bold",
  };

  const searchBarStyle = {
    width: "40%", // Shortened the width of the search bar
    padding: "5px",
    border: "2px solid #00b8d4",
    borderRadius: "5px",
  };

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const iconLinkStyle = {
    color: "white",
    fontSize: "1.5em",
    marginLeft: "15px", // Space between icons
    cursor: "pointer", // Add pointer cursor to icons
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the Cart page when the cart icon is clicked
  };

  return (
    <header style={headerStyle}>
      {/* Logo and Company Name */}
      <div style={logoContainerStyle}>
        <a href="#">
          <img src="MedPlus logo.png" alt="Logo" style={logoStyle} />
        </a>
        <span style={companyNameStyle}>Medplus</span>
      </div>

      {/* Search Bar */}
      <input
        style={searchBarStyle}
        type="text"
        placeholder="Search for medicine & wellness products..."
      />

      {/* Cart and Sign-in Icons */}
      <div style={iconContainerStyle}>
        <span style={iconLinkStyle} onClick={handleCartClick}>
          <i className="fas fa-shopping-cart"></i>
        </span>
        <a href="#" style={iconLinkStyle}>
          <i className="fas fa-user"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
