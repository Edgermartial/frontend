import React from "react";
import { Link } from "react-router-dom";

function Home({ products, onDeleteProduct }) {
  const styles = {
    container: {
      width: "60%",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
    },
    productList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px",
    },
    productCard: {
      background: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      width: "200px",
      textAlign: "center",
    },
    productImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "5px",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      padding: "8px",
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
      <h2>Home Page - Product List</h2>
      <Link to="/admin" style={styles.navLink}>Go to Admin</Link>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div style={styles.productList}>
          {products.map((product, index) => (
            <div style={styles.productCard} key={index}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button style={styles.deleteButton} onClick={() => onDeleteProduct(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
