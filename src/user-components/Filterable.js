// import '../Styles/App.css'; 
// import { Dropdown } from 'react-bootstrap';
// import { useState, useEffect } from 'react';

// function Filterable() {

    
//     const [categoryResults, setCategoryResults] = useState([]);
//     const [priceOrder, setPriceOrder] = useState('');
//     const [products, setProducts] = useState([]);

//     // Fetch products from API on component mount
//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/products')
//             .then(response => response.json())
//             .then(products => {
//                 setProducts(products);
//                 setCategroyResults(products); 
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

    
    
//     const handleCategorySelect = (category) => {
//         let filteredProducts = products;

//         filteredProducts = filteredProducts.filter(product =>
//             product.category === category
//         );
//         setCategroyResults(filteredProducts);
//     };
  



//     return (

//         <div className="d-flex justify-content-end gap-3 b-2">
//              <Dropdown>
//                     <Dropdown.Toggle variant="" className='p-3 fw-bold'>Category</Dropdown.Toggle>
//                     <Dropdown.Menu>
//                     {/* <Dropdown.Item>Fashion & Apparel</Dropdown.Item>
//                     <Dropdown.Item>Electronics & Gadgets</Dropdown.Item>
//                     <Dropdown.Item>Health & Beauty</Dropdown.Item>
//                     <Dropdown.Item>Home & Living</Dropdown.Item>
//                     <Dropdown.Item>Toys & Baby Products</Dropdown.Item>
//                     <Dropdown.Item>Sports & Outdoor Equipment</Dropdown.Item>
//                     <Dropdown.Item>Books & Media</Dropdown.Item>
//                     <Dropdown.Item>Groceries & Food Products</Dropdown.Item>
//                     <Dropdown.Item>Pet Supplies</Dropdown.Item>
//                     <Dropdown.Item>Automotive Parts & Accessories</Dropdown.Item> */}

// <Dropdown.Item onClick={() => handleCategorySelect("Fashion & Apparel")}>
//                                     Fashion & Apparel
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Electronics & Gadgets")}>
//                                     Electronics & Gadgets
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Health & Beauty")}>
//                                     Health & Beauty
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Home & Living")}>
//                                     Home & Living
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Toys & Baby Products")}>
//                                     Toys & Baby Products
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Sports & Outdoor Equipment")}>
//                                     Sports & Outdoor Equipment
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Books & Media")}>
//                                     Books & Media
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Groceries & Food Products")}>
//                                     Groceries & Food Products
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Pet Supplies")}>
//                                     Pet Supplies
//                                 </Dropdown.Item>
//                                 <Dropdown.Item onClick={() => handleCategorySelect("Automotive Parts & Accessories")}>
//                                     Automotive Parts & Accessories
//                                 </Dropdown.Item>




//                     </Dropdown.Menu>
//                 </Dropdown> 
                        
//                 <Dropdown>
//                     <Dropdown.Toggle variant="" id="stock-qty" className='p-3 fw-bold'>Sort price by: </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                     <Dropdown.Item>Highest to Lowest</Dropdown.Item>
//                     <Dropdown.Item>Lowest to Highest</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>   
//         </div>

//     )
// }

// export default Filterable;



// import { Dropdown } from "react-bootstrap";
// import { useState } from "react";

// function Filterable({ onCategoryChange, onPriceSortChange }) {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [priceOrder, setPriceOrder] = useState("");

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     onCategoryChange(category); // Pass selected category up to parent
//   };

//   const handlePriceSortSelect = (order) => {
//     setPriceOrder(order);
//     onPriceSortChange(order); // Pass selected price order up to parent
//   };

//   return (
//     <div className="d-flex justify-content-end gap-3">
//       {/* Category Filter */}
//       <Dropdown>
//         <Dropdown.Toggle variant="primary">Category</Dropdown.Toggle>
//         <Dropdown.Menu>
//           {[
//             "Fashion & Apparel",
//             "Electronics & Gadgets",
//             "Health & Beauty",
//             "Home & Living",
//             "Toys & Baby Products",
//             "Sports & Outdoor Equipment",
//             "Books & Media",
//             "Groceries & Food Products",
//             "Pet Supplies",
//             "Automotive Parts & Accessories",
//           ].map((cat) => (
//             <Dropdown.Item key={cat} onClick={() => handleCategorySelect(cat)}>
//               {cat}
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* Price Sort */}
//       <Dropdown>
//         <Dropdown.Toggle variant="primary">Sort Price By</Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => handlePriceSortSelect("highest")}>
//             Highest to Lowest
//           </Dropdown.Item>
//           <Dropdown.Item onClick={() => handlePriceSortSelect("lowest")}>
//             Lowest to Highest
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   );
// }

// export default Filterable;

import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function Filterable({ onCategoryChange, onPriceSortChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceOrder, setPriceOrder] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Pass selected category up to FrontStore
  };

  const handlePriceSortSelect = (order) => {
    setPriceOrder(order);
    onPriceSortChange(order); // Pass selected price order up to FrontStore
  };

  return (
    <div className="d-flex justify-content-end gap-3 mb-2">
      {/* Category Filter */}
      <Dropdown>
        <Dropdown.Toggle variant="">Category</Dropdown.Toggle>
        <Dropdown.Menu>
          {[
            "All",
            "Fashion & Apparel",
            "Electronics & Gadgets",
            "Health & Beauty",
            "Home & Living",
            "Toys & Baby Products",
            "Sports & Outdoor Equipment",
            "Books & Media",
            "Groceries & Food Products",
            "Pet Supplies",
            "Automotive Parts & Accessories",
          ].map((cat) => (
            <Dropdown.Item key={cat} onClick={() => handleCategorySelect(cat)}>
              {cat}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Price Sort */}
      <Dropdown>
        <Dropdown.Toggle variant="">Sort Price By</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlePriceSortSelect("highest")}>
            Highest to Lowest
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceSortSelect("lowest")}>
            Lowest to Highest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filterable;

