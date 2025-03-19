import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import Cart from './components/cart'; // Ensure this is correctly imported
import Login from './components/Login';

const App = () => {
    const [cart, setCart] = useState([]); // State to manage the cart
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route 
                    path="/admin" 
                    element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} 
                />
                <Route path="/cart" element={<Cart cart={cart} />} /> {/* Pass cart to Cart component */}
            </Routes>
        </div>
    );
};

export default App;