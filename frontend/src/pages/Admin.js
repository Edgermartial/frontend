import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {
    if (name && price && image) {
      onAddProduct({ name, price: parseFloat(price), image });
      setName("");
      setPrice("");
      setImage("");
    }
  };

  const styles = {
    container: {
      width: "50%",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
      background: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    navLink: {
      display: "block",
      marginTop: "15px",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#007bff",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Admin Panel</h2>
      <div style={styles.formGroup}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddProduct} style={styles.button}>
          Add Product
        </button>
      </div>
      <Link to="/" style={styles.navLink}>Go to Home</Link>
    </div>
  );
}

export default Admin;
