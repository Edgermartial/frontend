import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios.get('http://localhost:5000/api/items');
            setItems(res.data);
        };
        fetchItems();
    }, []);

    const handleAddItem = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/api/admin/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setItems([...items, response.data]);
            setName('');
            setPrice('');
            setImage(null);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleDeleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/api/admin/delete/${id}`);
        setItems(items.filter(item => item._id !== id));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Admin Panel</h1>
            <form onSubmit={handleAddItem} style={styles.form}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Add Item</button>
            </form>
            <h2 style={styles.subtitle}>Existing Items</h2>
            <div style={styles.itemsContainer}>
                {items.map(item => (
                    <div key={item._id} style={styles.itemCard}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <img src={item.image} alt={item.name} style={styles.image} />
                        <button onClick={() => handleDeleteItem(item._id)} style={styles.deleteButton}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Styles
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
    },
    title: {
        marginBottom: '20px',
        color: '#343a40',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#218838',
    },
    subtitle: {
        marginTop: '20px',
        marginBottom: '10px',
        color: '#343a40',
    },
    itemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    itemCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginBottom: '10px',
    },
    deleteButton: {
        padding: '5px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default Admin;