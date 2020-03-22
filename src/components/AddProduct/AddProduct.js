import React, {useContext} from 'react';
import './AddProduct.css';
import {GlobalContext} from '../../context/GlobalState';
import {Form, Button} from 'react-bootstrap'

const AddProduct = props => {

  const addProduct = useContext(GlobalContext);

  const handleSubmit = (data) => {
    console.log("Added Product");
    addProduct(data);
  }

  return (
    <React.Fragment >
      <div className="container">
        <h1>Add Product</h1>
        <Form onSubmit={(event) => handleSubmit(event)}>

          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name of product"/>
          </Form.Group>

          <Form.Group controlId="desc">
            <Form.Label>Product Inforamtion</Form.Label>
            <Form.Control type="text" placeholder="Information about product"/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
      </div>
    </React.Fragment>
  );
}

export default AddProduct;
