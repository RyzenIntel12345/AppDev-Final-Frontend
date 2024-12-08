import React, { useState, useEffect } from 'react';
import { Table, Button, Alert, Dropdown } from 'react-bootstrap';
import '../Styles/App.css'; 
import EditProduct from './EditProduct';

function TableProduct({ data, onSaveProduct, onDeleteProduct }) {
  // handle states for selected product and modals
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [sortedData, setSortedData] = useState(data); 
  const [sortPriceOrder, setSortPriceOrder] = useState(null); 
  const [sortQuantityOrder, setSortQuantityOrder] = useState(null); 

  useEffect(() => {
    // Sort the data whenever sorting states change
    let sorted = [...data];

    // Sort by price
    if (sortPriceOrder === 'Highest') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortPriceOrder === 'Lowest') {
      sorted.sort((a, b) => a.price - b.price);
    }

    // Sort by quantity
    if (sortQuantityOrder === 'Highest') {
      sorted.sort((a, b) => b.quantity - a.quantity);
    } else if (sortQuantityOrder === 'Lowest') {
      sorted.sort((a, b) => a.quantity - b.quantity);
    }

    setSortedData(sorted);
  }, [data, sortPriceOrder, sortQuantityOrder]);

  const handleCloseEdit = () => setShowEdit(false);

  const handleDelete = (id) => {
    const isYes = window.confirm('Are you sure you want to delete this product?');

    if (isYes) {
      // Call onDeleteProduct passed as a prop
      onDeleteProduct(id);
      setAlertMessage({ type: 'success', message: 'Product deleted successfully!' }); 
    }
  };

  const handleEdit = (product) => {
    // Store product in state for prefilled form
    setSelectedProduct(product);
    setShowEdit(true); 
  };

  const handleSaveProduct = (updatedProduct) => {
    onSaveProduct(updatedProduct); 
    setShowEdit(false);
    setAlertMessage({ type: 'success', message: 'Product updated successfully!' }); 
  };

  return (
    <>
      <div className='p-3'>
        {alertMessage && (
          <Alert variant={alertMessage.type} onClose={() => setAlertMessage(null)} dismissible>
            {alertMessage.message}
          </Alert>
        )}
      </div>
      
      <Table hover responsive className="mt-1 custom-table w-100">
        <thead>
          <tr>
            <th className='p-4'> Item Barcode</th>             
            <th className='p-4'>Product Name</th>                      
            <th className='p-4'>Description</th>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="" id="price" className='p-3 fw-bold'>Price</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSortPriceOrder('Highest')}>Highest</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSortPriceOrder('Lowest')}>Lowest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> 
            </th>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="" id="stock-qty" className='p-3 fw-bold'>Quantity</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSortQuantityOrder('Highest')}>Highest</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSortQuantityOrder('Lowest')}>Lowest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> 
            </th>                      
            <th className='p-4'>Category</th>
            <th className='p-4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No products available
              </td>
            </tr>
          ) : (
            sortedData.map((product) => (
              <tr key={product.id} className="p-3">
                <td className='text-center'>{product.barcode}</td>
                <td className='text-center'>{product.product_name}</td>
                <td width={"30%"} className="justify-content-center">{product.description}</td>
                <td className='text-center'>₱{product.price}</td>
                <td className='text-center'>{product.quantity}</td>
                <td className='text-center'>{product.category}</td>
                <td className="text-center" width={"10%"}>
                  <Button variant="success" size="sm" onClick={() => handleEdit(product)}>Edit</Button> {' '}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
                </td>
              </tr> 
            ))
          )}
        </tbody>
      </Table>
      
      {/* Render edit product */}
      <EditProduct 
        show={showEdit}
        handleClose={handleCloseEdit}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />
    </>
  );
}

export default TableProduct;
