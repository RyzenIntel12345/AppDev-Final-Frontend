import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function CheckoutPage() {
    return (
        <div className="py-5">
            <Container
                className="p-4"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                <h2 className="mb-4" style={{ color: '#59b280' }}>Checkout Page</h2>
                <Form>
                    {/* Shipping Details */}
                    <h4 className="mb-3">Shipping Details</h4>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3">
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your shipping address" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Form.Group controlId="formZipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Zip Code" />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Payment Details */}
                    <h4 className="mt-4 mb-3">Payment Details</h4>
                    <Form.Group controlId="formPaymentMethod">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control as="select">
                            <option value="credit">Credit Card</option>
                            <option value="debit">Debit Card</option>
                            <option value="paypal">E-wallet</option>
                            <option value="paypal">Cash on Delivery</option>
                        </Form.Control>
                    </Form.Group>
                    

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                        <Button
                            variant="success"
                            style={{
                                width: '100%',
                                borderRadius: '30px',
                            }}
                        >
                            Place Order
                        </Button>
                        <Button
                            onClick={() => window.history.back()}
                            className="mt-3 text-success"
                            variant=""
                            style={{
                                width: '100%',
                                borderRadius: '30px',
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default CheckoutPage;
