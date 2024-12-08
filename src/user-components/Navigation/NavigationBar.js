// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
// import { Navbar, Container, Form, FormControl, Nav, } from 'react-bootstrap';
// import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
// import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
// import UserProfile from './UserProfile';

// import '../Styles/NavigationBar.css'; 

// function NavigationBar() {
//     return (
//         <div >
//             <Navbar expand="lg" className="custom-navbar" >
//                 <Container className=" ">
//                     <Navbar.Brand href="#" className='brand-name'>
//                         <p className='d-flex flex-column lh-1 align-items-center mt-3'>
//                             <span className='keep'>Keep</span> 
//                             <span className='shopping'>SHOPPIN'</span>
//                         </p>
//                     </Navbar.Brand>

//                     <Form className="search-bar">
//                         <div className="search-input-container">
//                             <FaSearch className="search-icon" />
//                             <FormControl
//                                 type="search"
//                                 // placeholder="Search"
//                                 className="search-input"
//                                 aria-label="Search"
//                             />
//                         </div>
//                     </Form>

//                     <Nav className="icons-nav ">
//                         <Link to="/cart" className="cart-icon mt-2">
//                             <HiOutlineShoppingCart size={35} />
//                             <span className="cart-badge">3</span>
//                         </Link>                 
//                         <UserProfile />                    
//                     </Nav>
//                 </Container>
//             </Navbar>    
//         </div>

//     );
// }

// export default NavigationBar;

import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import UserProfile from './UserProfile';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';
import '../../Styles/NavigationBar.css';


function NavigationBar({onSearch , searchTerm}) {


    return (
        <div>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    {/* Brand Name */}
                    <Navbar.Brand href="#" className="brand-name">
                        <p className="d-flex flex-column lh-1 align-items-center mt-3">
                            <span className="keep">Keep</span> 
                            <span className="shopping">SHOPPIN'</span>
                        </p>
                    </Navbar.Brand>

                    {/* Search Bar
                    <SearchBar /> */}
                     {/* Pass the search handler to SearchBar */}
                    {/* <SearchBar onSearchChange={handleSearchChange} /> */}
                    <SearchBar searchTerm={searchTerm} onSearch={onSearch} />

                    {/* Icons Section */}
                    <Nav className="icons-nav">
                        <CartIcon />
                        <UserProfile />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
