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
    alignItems: "center", // Ensures the logo, company name, and search bar are in the same line
  };

  const logoStyle = {
    height: "40px",
    marginRight: "10px", // Add some spacing between the logo and text
  };

  const companyNameStyle = {
    fontSize: "24px",
    color: "white",
    fontWeight: "bold",
    marginRight: "20px", // Add space between the company name and the search bar
    fontFamily: "Arial, sans-serif", // Consistent font for the company name
  };

  const searchBarStyle = {
    width: "500px", // Increased width of the search bar
    padding: "7px", // Slightly increased padding for a larger appearance
    border: "2px solid #00b8d4",
    borderRadius: "5px",
    marginLeft: "50px", // Ensure space between logo text and search bar
    fontFamily: "Arial, sans-serif", // Consistent font for the input field
  };

  const navLinksContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: "white",
    fontSize: "16px",
    // fontWeight: "bold",
    marginRight: "20px",
    cursor: "pointer", // Pointer cursor for nav links
    fontFamily: "Arial, sans-serif", // Consistent font for the links
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
    display: "flex",
    alignItems: "center", // Align icons and text
    fontFamily: "Arial, sans-serif", // Consistent font for icons text
  };

  const iconTextStyle = {
    fontSize: "14px",
    marginLeft: "5px", // Space between icon and text
    fontFamily: "Arial, sans-serif", // Consistent font for the text beside icons
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the Cart page when the cart icon is clicked
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigate to Home
  };

  const handleAboutClick = () => {
    navigate("/about"); // Navigate to About Us
  };

  return (
    <header style={headerStyle}>
      {/* Logo and Search Bar */}
      <div style={logoContainerStyle}>
        <a href="#">
          <img src="MedPlus logo.png" alt="Logo" style={logoStyle} />
        </a>
        <span style={companyNameStyle}>MedPlus</span>
        <input
          style={searchBarStyle}
          type="text"
          placeholder="Search for medicine & wellness products..."
        />
      </div>

      {/* Navigation Links and Cart */}
      <div style={navLinksContainerStyle}>
        {/* Home and About Us Links */}
        <span style={navLinkStyle} onClick={handleHomeClick}>
          Home
        </span>
        <span style={navLinkStyle} onClick={handleAboutClick}>
          About Us
        </span>

        {/* Cart and Sign-in Icons */}
        <span style={iconLinkStyle} onClick={handleCartClick}>
          <i className="fas fa-shopping-cart"></i>
          <span style={iconTextStyle}>Cart</span>
        </span>
        <span style={iconLinkStyle}>
          <i className="fas fa-user"></i>
          <span style={iconTextStyle}>Sign In</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
