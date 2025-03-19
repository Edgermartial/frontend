import React from 'react';
import axios from 'axios';

const Cart = ({ cart }) => {
    const handlePurchase = async (item) => {
        // Collect necessary information for M-Pesa payment
        const phoneNumber = prompt("Please enter your M-Pesa phone number:");
        if (!phoneNumber) {
            alert("Phone number is required for payment.");
            return;
        }

        // Prepare the payment request
        const paymentData = {
            phoneNumber,
            amount: item.price, // Use the price of the specific item
            // Add any other necessary data for the payment
        };

        try {
            // Make a request to your backend to initiate the M-Pesa payment
            const response = await axios.post('http://localhost:5000/api/mpesa/pay', paymentData);
            alert("Payment initiated successfully!"); // Notify user of success
            console.log(response.data); // Log the response for debugging
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("There was an error initiating the payment. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div style={styles.cartList}>
                    {cart.map((cartItem, index) => (
                        <div key={index} style={styles.cartItem}>
                            <div style={styles.itemDetails}>
                                <span>{cartItem.name}</span>
                                <span> - ${cartItem.price}</span>
                            </div>
                            <button style={styles.purchaseButton} onClick={() => handlePurchase(cartItem)}>
                                Purchase
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
    },
    title: {
        marginBottom: '20px',
        color: '#343a40',
    },
    cartList: {
        display: 'flex',
        flexWrap: 'wrap', // Allow items to wrap to the next line if necessary
        justifyContent: 'center', // Center items horizontally
        padding: 0,
        margin: '0', // Remove default margin
    },
    cartItem: {
        display: 'flex',
        flexDirection: 'column', // Stack item details and button vertically
        alignItems: 'center',
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '200px', // Set a fixed width for cart items
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
        backgroundColor: '#ffffff', // White background for item cards
    },
    itemDetails: {
        marginBottom: '10px', // Space between item details and button
    },
    purchaseButton: {
        padding: '10px 15px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
};

export default Cart;