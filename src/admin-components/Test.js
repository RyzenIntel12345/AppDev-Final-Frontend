// import React, { useState } from 'react';
// import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProductCard = ({ item, onIncrement, onDecrement }) => {
//   return (
//     <Card className="mb-3" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
//       <Row noGutters>
//         <Col md={4} className="d-flex justify-content-center align-items-center">
//           <Card.Img variant="top" src={item.image} style={{ width: '70px', height: '70px', borderRadius: '35px' }} />
//         </Col>
//         <Col md={8}>
//           <Card.Body>
//             <Card.Title>{item.name}</Card.Title>
//             <Card.Text>{item.description}</Card.Text>
//             <Card.Text>
//               ${item.price.toFixed(2)} <span style={{ fontSize: '14px', color: '#666' }}>per item</span>
//             </Card.Text>
//             <div className="d-flex align-items-center">
//               <Button variant="warning" onClick={onDecrement} style={{ width: '30px', height: '30px' }}>
//                 -
//               </Button>
//               <span className="mx-3" style={{ fontWeight: 'bold', fontSize: '18px' }}>
//                 {item.amount}
//               </span>
//               <Button variant="warning" onClick={onIncrement} style={{ width: '30px', height: '30px' }}>
//                 +
//               </Button>
//             </div>
//           </Card.Body>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// const App = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Hamburger', description: 'Juicy beef patty on a fresh bun with all the fixings', price: 5.99, image: 'https://source.unsplash.com/900x900/?burger', amount: 0 },
//     { id: 2, name: 'Pizza', description: 'Freshly made pizza with your choice of toppings', price: 9.99, image: 'https://source.unsplash.com/900x900/?pizza', amount: 0 },
//     { id: 3, name: 'Salad', description: 'Fresh greens and veggies with your choice of dressing', price: 4.99, image: 'https://source.unsplash.com/900x900/?salad', amount: 0 },
//     { id: 4, name: 'Fries', description: 'Crispy and delicious, perfect as a side or on their own', price: 2.99, image: 'https://source.unsplash.com/900x900/?fries', amount: 0 },
//     { id: 5, name: 'Ice Cream', description: 'Rich and creamy, the perfect dessert any time of day', price: 3.99, image: 'https://source.unsplash.com/900x900/?icecream', amount: 0 },
    
//     { id: 6, name: 'Big Hamburger', description: 'Juicy beef patty on a fresh bun with all the fixings', price: 5.99, image: 'https://source.unsplash.com/900x900/?burger', amount: 0 },
//     { id: 7, name: 'Big Pizza ', description: 'Freshly made pizza with your choice of toppings', price: 9.99, image: 'https://source.unsplash.com/900x900/?pizza', amount: 0 },
//     { id: 8, name: 'Big Salad', description: 'Fresh greens and veggies with your choice of dressing', price: 4.99, image: 'https://source.unsplash.com/900x900/?salad', amount: 0 },
//     { id: 9, name: 'Big Fries', description: 'Crispy and delicious, perfect as a side or on their own', price: 2.99, image: 'https://source.unsplash.com/900x900/?fries', amount: 0 },
//     { id: 10, name: 'Big Ice Cream', description: 'Rich and creamy, the perfect dessert any time of day', price: 3.99, image: 'https://source.unsplash.com/900x900/?icecream', amount: 0 },
//   ]);

//   const handleIncrement = (item) => {
//     setProducts(
//       products.map((product) =>
//         product.id === item.id ? { ...product, amount: product.amount + 1 } : product
//       )
//     );
//   };

//   const handleDecrement = (item) => {
//     setProducts(
//       products.map((product) =>
//         product.id === item.id ? { ...product, amount: Math.max(0, product.amount - 1) } : product
//       )
//     );
//   };

//   return (
//     <Container style={{ marginTop: '40px' }}>
//       <Row>
//         {products.map((item) => (
//           <Col md={6} lg={4} key={item.id}>
//             <ProductCard item={item} onIncrement={() => handleIncrement(item)} onDecrement={() => handleDecrement(item)} />
//           </Col>
//         ))}
//       </Row>
//       <Button variant="success" style={{ position: 'fixed', bottom: '16px', left: '16px', right: '16px', width: '100%' }}>
//         Continue
//       </Button>
//     </Container>
//   );
// };

// export default App;


