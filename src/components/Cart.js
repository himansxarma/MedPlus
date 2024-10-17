import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, updateQuantity, getTotalPrice } = useContext(Cart);

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.itemDetails}>
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>
                <div style={styles.quantityControl}>
                  <button
                    style={styles.qtyButton}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    style={styles.qtyButton}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p style={styles.totalPrice}>
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <h2 style={styles.totalAmount}>
            Total: ₹{getTotalPrice().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: "20px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  itemDetails: {
    flex: 1,
    marginLeft: "20px",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  qtyButton: {
    padding: "5px 10px",
    backgroundColor: "#00b8d4",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  totalAmount: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Cart;
