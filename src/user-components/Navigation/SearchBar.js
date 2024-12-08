import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../../Styles/NavigationBar.css'; 

function SearchBar({searchTerm, onSearch}) {

    const handleChange = (e) => {
        onSearch(e.target.value); // Update search term in the parent
      };

    
    return (
        <Form className="search-bar">
            <div className="search-input-container">
                <FaSearch className="search-icon" />
                <FormControl
                    type="search"
                    className="search-input"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
        </Form>
    );
}

export default SearchBar;

