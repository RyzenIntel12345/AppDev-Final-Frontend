import { Card, Row, Col } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi';
import QuantitySelector from '../QuantitySelector';

function ProductCart() {
    return (
        <div className="d-flex justify-content-center my-3">
            <Card 
                style={{
                    width: '40rem',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Card.Body>
                    <Row className="align-items-center text-center">
                        {/* Product Details */}
                        <Col xs={3}>
                            <Card.Title className="mb-1">Laptop</Card.Title>
                            <Card.Subtitle className="text-success">
                                $300.00
                            </Card.Subtitle>
                        </Col>

                        {/* Quantity Selector */}
                        <Col xs={4}>
                            <QuantitySelector />
                        </Col>

                        {/* Total Price */}
                        <Col xs={3}>
                            <Card.Subtitle className="fw-bold">
                                $300.00
                            </Card.Subtitle>
                        </Col>

                        {/* Trash Icon */}
                        <Col xs={2}>
                            <FiTrash2 size={25} className="trash-icon" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCart;
