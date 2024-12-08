import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavigationBar from '../user-components/Navigation/NavigationBar';
import ProductCart from '../user-components/ShoppingCart/ProductCart';
import OrderSummary from '../user-components/ShoppingCart/OrderSummary';
import EmptyCart from '../user-components/ShoppingCart/EmptyCart';
import BackToShoppingButton from '../user-components/BackToShoppingButton';

function ShoppingCartPage() {
    return (
        <div>
            <NavigationBar />

            {/* Main Container */}
            <Container className="mt-5">
                <Row>
                    {/* Shopping Cart Section */}
                    <Col className="d-flex flex-column">
                        <h2 className="mb-4" style={{ color: '#59b280' }}>
                            Shopping Cart
                        </h2>

                        <Row className=''>
                            <Col><h6>3 items</h6>  </Col>  
                            <Col className='text-end text-danger' style={{cursor: 'pointer'}}><h6> remove all</h6></Col> 
                        </Row>
                        <hr />

                        {/* Cart Items */}
                        {/* <div 
                            className="flex-grow-1"
                            style={{
                                maxHeight: '400px', // Set the maximum height for the scrollable area
                                overflowY: 'auto',  // Enable vertical scrolling
                                paddingRight: '10px', // Optional: Prevent content from cutting off near the scrollbar
                            }}
                        >
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                            <ProductCart />
                        </div> */}

                        {/* if items is 0 empty cart */}
                        <EmptyCart/>


                        {/* Back to Shopping Button */}
                        {/* <div className="mt-auto">
                            <Button
                                as={Link}
                                to="/frontstore"
                                variant="outline-success"
                                style={{
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaArrowLeft className="me-2" />
                                Back to Shopping
                            </Button>
                        </div> */}
                        <BackToShoppingButton/>
                    </Col>

                    {/* Order Summary Section */}
                    <Col>
                        <OrderSummary />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShoppingCartPage;

