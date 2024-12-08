// import React from 'react';
// import { Button, Container, Table } from 'react-bootstrap';


// function OrderSummary() {
//     return (
//         <div className="my-4">
//             <Container
//                 className="p-4 align-bottom"
//                 style={{
//                     backgroundColor: 'white',
//                     borderRadius: '10px',
//                     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//                     height: '65vh'
//                 }}
//             >
//                 {/* Order Summary Title */}
//                 <h4 className="mb-4 mt-3 " style={{ color: '#59b280' }}>Order Summary</h4>

//                 <Container className='p-3'
//                     style={{
//                         backgroundColor: '#adebc8',
//                         borderRadius: '10px',
//                         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//                     }}
//                 >
//                     {/* Order Table */}
//                     <Table hover size="sm" className='' >
//                         <thead>
//                             <tr>
//                                 <th>Item</th>
//                                 <th className='text-end'>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Item 1</td>
//                                 <td className='text-end'>$10.00</td>
//                             </tr>
//                             <tr>
//                                 <td>Item 2</td>
//                                 <td className='text-end'>$20.00</td>
//                             </tr>
//                             <tr>
//                                 <td>Item 3</td>
//                                 <td className='text-end'>$30.00</td>
//                             </tr>
//                         </tbody>
//                     </Table>

//                 </Container>

//                 {/* Total */}
//                 <div className="d-flex justify-content-between align-items-center mt-4">
//                     <h5 className="">Total:</h5>
//                     <h5 className="fw-bold">$60.00</h5>
//                 </div>

//                 {/* Checkout Button */}
//                 <Button
//                     variant="success"
//                     className="mt-4"
//                     style={{
//                         width: '100%',
//                         position: 'relative', // Adjusted to avoid overlap with other content
//                         borderRadius: '30px',
//                     }}
//                 >
//                     Checkout
//                 </Button>
//             </Container>
//         </div>

        
//     );
// }

// export default OrderSummary;


import React from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Styles/User.css';

function OrderSummary() {
    return (
        <Container
            className="my-2 p-4 d-flex flex-column justify-content-between"
            style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                height: '65vh',
            }}
        >
            {/* Header */}
            <h4 className="mb-4 mt-3 text-center fw-bold" style={{ color: '#59b280' }}>
                Order Summary
            </h4>

            {/* Order Table Section */}
            <Row>
                <Col>
                    <Container
                        className="p-4"
                        style={{
                            backgroundColor: 'rgba(173, 235, 200, 0.5)',
                            borderRadius: '10px',
                            height: '35vh',
                           
                        }}
                    >
                        <Table 
                            hover 
                            size="sm" 
                            className="mb-1 custom-tbl"
                            style={{
                                // backgroundColor: 'rgba(173, 235, 200, 0.5) !important',
                                borderCollapse: 'collapse', 
                            }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ border: 'none' }}>Item</th>
                                    <th style={{ border: 'none' }} className="text-end">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: 'none' }}>Item 1</td>
                                    <td style={{ border: 'none' }} className="text-end">$10.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: 'none' }}>Item 2</td>
                                    <td style={{ border: 'none' }} className="text-end">$20.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: 'none' }}>Item 3</td>
                                    <td style={{ border: 'none' }} className="text-end">$30.00</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Container>
                </Col>
            </Row>

            {/* Total Section */}
            <Row className="mt-4 m-1">
                <Col className="d-flex justify-content-between">
                    <h5>Total:</h5>
                    <h5 className="fw-bold">$60.00</h5>
                </Col>
            </Row>

            {/* Checkout Button */}
            <Row className="mt-auto">
                <Col>
                    <Button
                        as={Link}
                        to="/checkout"
                        variant="success"
                        className="w-100"
                        style={{ borderRadius: '30px' }}
                    >
                        Checkout
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderSummary;
