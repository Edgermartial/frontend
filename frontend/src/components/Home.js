import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({ cart, setCart }) => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios.get('http://localhost:5000/api/items');
            setItems(res.data);
        };
        fetchItems();
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]); // Update cart state
        alert(`${item.name} has been added to your cart!`); // Alert message
        console.log('Added to cart:', item);
    };

    const goToCart = () => {
        navigate('/cart'); // Navigate to the Cart page
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Welcome to Our E-Commerce Store</h1>
                <button style={styles.cartButton} onClick={goToCart}>Cart ({cart.length})</button>
            </div>
            <div style={styles.intro}>
                <h2 style={styles.introTitle}>Shop the Best Products</h2>
                <p style={styles.introText}>
                    Discover a wide range of products at unbeatable prices. Our store offers high-quality items that cater to all your needs.
                </p>
            </div>
            <div style={styles.itemsContainer}>
                {items.map(item => (
                    <div key={item._id} style={styles.itemCard}>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <img src={item.image} alt={item.name} style={styles.image} />
                        <button style={styles.button} onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div style={styles.footer}>
                <h2 style={styles.footerTitle}>Why Shop With Us?</h2>
                <ul style={styles.benefitsList}>
                    <li>✅ Quality Products</li>
                    <li>✅ Fast Shipping</li>
                    <li>✅ Excellent Customer Service</li>
                    <li>✅ Secure Payment Options</li>
                </ul>
            </div>
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
        backgroundColor: '#f8f9fa', // Light background color
        minHeight: '100vh', // Full height
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px', // Optional: Set a max width for the header
        alignItems: 'center',
    },
    title: {
        marginBottom: '20px',
        color: '#343a40', // Darker text color
    },
    cartButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    intro: {
        textAlign: 'center',
        margin: '20px 0',
    },
    introTitle: {
        color: '#343a40',
    },
    introText: {
        color: '#6c757d',
        maxWidth: '600px',
        margin: '0 auto',
    },
    itemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items horizontally
        maxWidth: '1200px', // Optional: Set a max width for the items container
    },
    itemCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
        textAlign: 'center', // Center text inside the card
        width: '200px', // Set a fixed width for the item cards
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
        backgroundColor: '#ffffff', // White background for item cards
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover', // Maintain aspect ratio
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s', // Smooth transition for hover effect
    },
    footer: {
        marginTop: '40px',
        textAlign: 'center',
    },
    footerTitle: {
        color: '#343a40',
    },
    benefitsList: {
        listStyleType: 'none',
        padding: 0,
        color: '#6c757d',
    },
};

export default Home;