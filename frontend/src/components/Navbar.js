import { Link, useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated }) {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login if not authenticated
        } else {
            navigate('/admin'); // Navigate to admin if authenticated
        }
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <span onClick={handleAdminClick} style={styles.link}>Admin</span>
            </div>
        </nav>
    );
}

// Styles
const styles = {
    navbar: {
        padding: "15px 20px",
        background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
    },
    navLinks: {
        display: "flex",
        gap: "15px", // Space between links
    },
    link: {
        color: "#fff",
        textDecoration: "none", // Remove underline
        padding: "10px 15px", // Add padding for better click area
        borderRadius: "5px", // Rounded corners
        transition: "background 0.3s, color 0.3s", // Smooth transition for hover effect
        cursor: 'pointer', // Change cursor to pointer for clickable span
    },
};

export default Navbar;