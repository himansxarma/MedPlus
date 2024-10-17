import React, { useState } from "react";

function Medicine() {
  // Sample medicine data with images, discounts, and prices
  const medicines = [
    {
      id: 1,
      name: "Facewash",
      price: 467.5,
      originalPrice: 550.0,
      discount: "15% OFF",
      image: "images/facewash.jpeg",
    },
    {
      id: 2,
      name: "Paracetamol",
      price: 325.28,
      originalPrice: 380.0,
      discount: "14.4% OFF",
      image: "images/paracip.jpeg",
    },
    {
      id: 3,
      name: "Azicip",
      price: 142.5,
      originalPrice: 150.0,
      discount: "5% OFF",
      image: "images/azicip.jpeg",
    },
    {
      id: 4,
      name: "Ashwagandha",
      price: 239.6,
      originalPrice: 599.0,
      discount: "60% OFF",
      image: "images/ashwa.jpeg",
    },
    {
      id: 5,
      name: "Himalaya Liv.52 Tablet",
      price: 130.0,
      originalPrice: 150.0,
      discount: "13.3% OFF",
      image: "images/himalaya.jpeg",
    },
    {
      id: 6,
      name: "Revital",
      price: 280.0,
      originalPrice: 325.0,
      discount: "15% OFF",
      image: "images/revital.jpeg",
    },
    {
      id: 7,
      name: "Volini Gel",
      price: 80.0,
      originalPrice: 90.0,
      discount: "11% OFF",
      image: "images/volini.jpeg",
    },
    {
      id: 8,
      name: "Dabur Chyawanprash",
      price: 199.0,
      originalPrice: 220.0,
      discount: "9.5% OFF",
      image: "images/dabur.jpeg",
    },
    {
      id: 9,
      name: "Dettol handwash",
      price: 150.0,
      originalPrice: 175.0,
      discount: "14.3% OFF",
      image: "images/dettol.jpeg",
    },
    {
      id: 10,
      name: "Aspirin",
      price: 90.0,
      originalPrice: 110.0,
      discount: "18.2% OFF",
      image: "images/aspirin.jpeg",
    },
    {
      id: 11,
      name: "BP measurer",
      price: 210.0,
      originalPrice: 240.0,
      discount: "12.5% OFF",
      image: "images/bp.jpeg",
    },
    {
      id: 12,
      name: "oxygen checker",
      price: 975.0,
      originalPrice: 1080.0,
      discount: "9.7% OFF",
      image: "images/ochecker.jpeg",
    },
    {
      id: 13,
      name: "Balm",
      price: 330.0,
      originalPrice: 400.0,
      discount: "17.5% OFF",
      image: "images/balm.jpeg",
    },
    {
      id: 14,
      name: "Bodywash",
      price: 565.0,
      originalPrice: 660.0,
      discount: "14.3% OFF",
      image: "images/bodywash.jpeg",
    },
  ];

  // State for managing filter price range
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Handler function to simulate adding to cart
  const handleAddToCart = (medicine) => {
    alert(`${medicine.name} added to cart!`);
  };

  // Styles for various components
  const styles = {
    mainContainer: {
      display: "flex",
      padding: "20px",
    },
    sidebar: {
      width: "20%",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRight: "2px solid #ccc",
    },
    sidebarHeading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    filterDropdown: {
      marginBottom: "20px",
    },
    priceSlider: {
      width: "100%",
      marginBottom: "20px",
    },
    medicineContainer: {
      width: "80%",
      padding: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
    },
    medicineCard: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    medicineImage: {
      width: "100%",
      height: "200px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    medicineName: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    price: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#00b8d4",
    },
    originalPrice: {
      textDecoration: "line-through",
      color: "#888",
    },
    discount: {
      backgroundColor: "#00b8d4",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      fontSize: "12px",
      position: "absolute",
      top: "10px",
      left: "10px",
    },
    addToCartButton: {
      backgroundColor: "#00b8d4",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <>
      {/* Main Content */}
      <div style={styles.mainContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarHeading}>Filters</h3>

          {/* Price Slider */}
          <div style={styles.filterDropdown}>
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, e.target.value])}
              style={styles.priceSlider}
            />
            <p>Range: ₹0 - ₹{priceRange[1]}</p>
          </div>

          {/* Brands Dropdown */}
          <div style={styles.filterDropdown}>
            <h4>Brands</h4>
            <label>
              <input type="checkbox" />
              Lorem Brand 1
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Lorem Brand 2
            </label><br />
            <label>
              <input type="checkbox" />
              Lorem Brand 3
            </label><br />
            <label>
              <input type="checkbox" />
              Lorem Brand 4
            </label><br />
            <label>
              <input type="checkbox" />
              Lorem Brand 5
            </label><br />
            <label>
              <input type="checkbox" />
              Lorem Brand 6
            </label>
          </div>

          {/* Categories Dropdown */}
          <div style={styles.filterDropdown}>
            <h4>Categories</h4>
            <label>
              <input type="checkbox" />
              Ayurvedic
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Fitness Devices
            </label>
          </div>

          {/* Devices Dropdown */}
          <div style={styles.filterDropdown}>
            <h4>Devices</h4>
            <label>
              <input type="checkbox" />
              BP Measurer
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Oxygen Checker
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Air Purifier
            </label>
            <br />
            <label>
              <input type="checkbox" />
              Thermometer
            </label>
          </div>
        </aside>

        {/* Medicine List */}
        <div style={styles.medicineContainer}>
          {medicines
            .filter((medicine) => medicine.price <= priceRange[1]) // Apply price filter
            .map((medicine) => (
              <div key={medicine.id} style={styles.medicineCard}>
                <span style={styles.discount}>{medicine.discount}</span>
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  style={styles.medicineImage}
                />
                <span style={styles.medicineName}>{medicine.name}</span>
                <div style={styles.priceContainer}>
                  <span style={styles.price}>₹{medicine.price}</span>
                  <span style={styles.originalPrice}>
                    ₹{medicine.originalPrice}
                  </span>
                </div>
                <button
                  style={styles.addToCartButton}
                  onClick={() => handleAddToCart(medicine)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Medicine;
