import { Container, Row, Col, Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/User.css";

function ProductCatalog() {
    
    // States for search, category filter, products, and search results
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch products from API on component mount
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
                setSearchResults(products); 
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleCategorySelect = (category) => {
        let filteredProducts = products;

        filteredProducts = filteredProducts.filter(product =>
            product.category === category
        );
        setSearchResults(filteredProducts);
    };

    const handleSearch = () => {
        let filteredProducts = products;
        
        if (search.length > 0) {
            // Filter by search query
            filteredProducts = filteredProducts.filter((product) =>
                product.product_name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(filteredProducts);
        }
        setSearchResults(filteredProducts);
    };

    
    return (
       <div>
        
        <Container>
            <h2 className="mt-4">Product Catalog</h2>
            <p className="mt-1 mb-4 text-muted">Showing {products.length} results</p>

            <Row className="pt-5">
                <Col>
                    <InputGroup size="md">
                            <Form.Control
                                type="search"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by Product Name"
                            />
                            <Button 
                            variant="outline-primary" 
                            onClick={handleSearch}
                            onChange={(e) => setSearch(e.target.value)}>
                                Search
                            </Button>
                    </InputGroup>                
                </Col>
                <Col md={5}>
                <Dropdown>
                            <Dropdown.Toggle
                                variant="outline-primary"
                                style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span>Filter category by</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='pe-5'>
                            <Dropdown.Item onClick={() => handleCategorySelect("All Products")}>
                                    All Products
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Fashion & Apparel")}>
                                    Fashion & Apparel
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Electronics & Gadgets")}>
                                    Electronics & Gadgets
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Health & Beauty")}>
                                    Health & Beauty
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Home & Living")}>
                                    Home & Living
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Toys & Baby Products")}>
                                    Toys & Baby Products
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Sports & Outdoor Equipment")}>
                                    Sports & Outdoor Equipment
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Books & Media")}>
                                    Books & Media
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Groceries & Food Products")}>
                                    Groceries & Food Products
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Pet Supplies")}>
                                    Pet Supplies
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleCategorySelect("Automotive Parts & Accessories")}>
                                    Automotive Parts & Accessories
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>

                <Col>
                    <Form.Select aria-label="Default select example">
                        <option>Default sorting</option>
                        <option value="1">Price: Low to High</option>
                        <option value="2">Price: High to Low</option>
                        <option value="3">Newest Arrivals</option>
                    </Form.Select>
                </Col>
            </Row>

            <div className="mt-4 d-flex flex-wrap" >
                {searchResults 
                    .filter(product => product.product_name.toLowerCase().includes(search.toLowerCase()))   
                    .map(product => (
                        <Col key={product.id} className="m-2">
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                <ProductCard product={product} />
                            </Link>
                        </Col>
                    ))}
            </div>
        </Container>
           

       </div>
    );
}

export default ProductCatalog;