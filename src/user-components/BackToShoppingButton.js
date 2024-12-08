import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function BackToShoppingButton() {

    return(
  
        <div className="mt-auto">
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
        </div>


        

    );

}

export default BackToShoppingButton;