// import '../Styles/App.css'; 
// import '../Styles/NavigationBar.css'; 
// import { Container, Form, Dropdown} from 'react-bootstrap';
// import ProductCatalog2 from "../user-components/ProductCatalog2";
// import ProductCatalog from "../user-components/ProductCatalog";
// import NavigationBar from '../user-components/Navigation/NavigationBar';
// import Filterable from '../user-components/Filterable';
// import { useState } from 'react';


// function FrontStore() {

//     return (
//         <div>
//            <NavigationBar/>
//            <Container >
//             <div className="mt-5 text-center">
//                 <h1 style={{color: '#59b280'}}>Product Catalog</h1>
//                 <p style={{color: '#737373'}}>Lorem Ipsum is simply dummy <br/>
//                 text of the printing and typesetting industry.</p>               
//             </div>

                     
//                 {/* <Dropdown>
//                     <Dropdown.Toggle variant="" className='p-3 fw-bold'>Category</Dropdown.Toggle>
//                     <Dropdown.Menu>
//                     <Dropdown.Item>Fashion & Apparel</Dropdown.Item>
//                     <Dropdown.Item>Electronics & Gadgets</Dropdown.Item>
//                     <Dropdown.Item>Health & Beauty</Dropdown.Item>
//                     <Dropdown.Item>Home & Living</Dropdown.Item>
//                     <Dropdown.Item>Toys & Baby Products</Dropdown.Item>
//                     <Dropdown.Item>Sports & Outdoor Equipment</Dropdown.Item>
//                     <Dropdown.Item>Books & Media</Dropdown.Item>
//                     <Dropdown.Item>Groceries & Food Products</Dropdown.Item>
//                     <Dropdown.Item>Pet Supplies</Dropdown.Item>
//                     <Dropdown.Item>Automotive Parts & Accessories</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown> 
                        
//                 <Dropdown>
//                     <Dropdown.Toggle variant="" id="stock-qty" className='p-3 fw-bold'>Sort price by: </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                     <Dropdown.Item>Highest to Lowest</Dropdown.Item>
//                     <Dropdown.Item>Lowest to Highest</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown> */}

//                 <Filterable/>
//                 <ProductCatalog2/>    
//            </Container>     
//         </div>
//     );
// }

// export default FrontStore;

import '../Styles/App.css'; 
import '../Styles/NavigationBar.css'; 
import { Container } from 'react-bootstrap';
import ProductCatalog2 from "../user-components/ProductCatalog2";
import Filterable from '../user-components/Filterable';
import NavigationBar from '../user-components/Navigation/NavigationBar';
import SearchBar from '../user-components/Navigation/SearchBar';
import { useState } from 'react';

function FrontStore() {
    // States to hold filter values
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [priceOrder, setPriceOrder] = useState('');

    // Function to handle search changes
    const handleSearchTermChange = (term) => {
        setSearchTerm(term);
    };

    // Function to handle category changes
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    // Function to handle price sort changes
    const handlePriceSortChange = (order) => {
        setPriceOrder(order);
    };

    return (
        <div>
            <NavigationBar onSearch={handleSearchTermChange} searchTerm={searchTerm}  />
            <Container>
                <div className="mt-5 text-center">
                    <h1 style={{ color: '#59b280' }}>Product Catalog</h1>
                    <p style={{ color: '#737373' }}>
                        Lorem Ipsum is simply dummy <br />
                        text of the printing and typesetting industry.
                    </p>
                </div>


                {/* Pass down the functions and state as props */}
                <Filterable 
                    onCategoryChange={handleCategoryChange} 
                    onPriceSortChange={handlePriceSortChange} 
                />
                <ProductCatalog2 
                    searchTerm={searchTerm} 
                    category={category} 
                    priceOrder={priceOrder} 
                />
            </Container>
        </div>
    );
}

export default FrontStore;
