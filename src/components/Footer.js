import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#339989", // Updated background color
    padding: "20px 0",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
    color: "#fff", // Set text color to white for contrast
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    flexWrap: "wrap",
    alignItems: "center",
  };

  const columnStyle = {
    width: "180px",
    marginBottom: "20px",
  };

  const headerStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#fff", // White header text for better visibility
  };

  const linkStyle = {
    display: "block",
    color: "#fff", // White links for better visibility
    marginBottom: "8px",
    textDecoration: "none",
    fontSize: "14px",
  };

  const logoStyle = {
    height: "60px",
    margin: "0 10px",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const copyrightStyle = {
    textAlign: "center",
    padding: "10px 0",
    borderTop: "1px solid #ccc",
    color: "#fff", // White copyright text
  };

  // Responsive style for smaller screens
  const responsiveStyle = `
    @media (max-width: 1024px) {
      .footer-section {
        padding: 0 10px;
      }
      .footer-section div {
        width: 150px; // Reduce width for medium screens
      }
    }

    @media (max-width: 768px) {
      .footer-section {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;
      }

      .footer-section div {
        width: 100%; // Make columns full width for mobile
        margin-bottom: 20px;
      }
    }

    @media (max-width: 480px) {
      .footer-section {
        padding: 0 10px;
      }
      .footer-section div {
        margin-bottom: 20px;
      }
    }
  `;

  return (
    <footer style={footerStyle}>
      {/* Inject responsive style */}
      <style>{responsiveStyle}</style>

      {/* Footer Section */}
      <div className="footer-section" style={sectionStyle}>
        {/* Medplus Logo Section */}
        <div style={logoContainerStyle}>
          <img
            src="MedPlus logo.png" // Replace with actual Medplus logo
            alt="Medplus Logo"
            style={logoStyle}
          />
        </div>

        {/* Company Information */}
        <div style={columnStyle}>
          <div style={headerStyle}>COMPANY</div>
          <a href="#" style={linkStyle}>About Medplus</a>
          <a href="#" style={linkStyle}>Customers Speak</a>
          <a href="#" style={linkStyle}>In the News</a>
          <a href="#" style={linkStyle}>Career</a>
          <a href="#" style={linkStyle}>Contact</a>
        </div>

        {/* Our Policies */}
        <div style={columnStyle}>
          <div style={headerStyle}>OUR POLICIES</div>
          <a href="#" style={linkStyle}>Terms and Conditions</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Fees and Payments</a>
          <a href="#" style={linkStyle}>Shipping Policy</a>
          <a href="#" style={linkStyle}>Refund Policy</a>
        </div>

        {/* Popular Categories */}
        <div style={columnStyle}>
          <div style={headerStyle}>POPULAR CATEGORIES</div>
          <a href="#" style={linkStyle}>Fitness</a>
          <a href="#" style={linkStyle}>Devices</a>
          <a href="#" style={linkStyle}>Ayurveda</a>
          <a href="#" style={linkStyle}>Surgical</a>
        </div>

        {/* Social Media Links */}
        <div style={columnStyle}>
          <div style={headerStyle}>SOCIAL</div>
          <a href="#" style={linkStyle}>Facebook</a>
          <a href="#" style={linkStyle}>Twitter</a>
          <a href="#" style={linkStyle}>LinkedIn</a>
          <a href="#" style={linkStyle}>Instagram</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={copyrightStyle}>
        <p>&copy; 2024 Medplus | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
