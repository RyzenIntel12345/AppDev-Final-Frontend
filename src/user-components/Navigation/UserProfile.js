import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function UserProfile() {
    const [showLogout, setShowLogout] = useState(false);

    const toggleLogout = () => {
        setShowLogout((prevState) => !prevState);
    };

    return (
        <div className="position-relative">
            {/* User Icon */}
            <Nav.Link href="#" className="profile-icon" onClick={toggleLogout}>
                <FaUserCircle size={37} />
            </Nav.Link>

            {/* Logout Option */}
            {showLogout && (
                <div
                    className="position-absolute"
                    style={{
                        top: '100%', // Positions the dropdown below the icon
                        right: '0',  // Aligns to the right of the icon
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                        padding: '10px',
                        zIndex: 1000, // Ensures it appears above other elements
                    }}
                >
                    <Nav.Link href="/" className="text-dark text-decoration-none">
                        Logout
                    </Nav.Link>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
