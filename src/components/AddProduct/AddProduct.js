import React, {useContext} from 'react';
import './AddProduct.css';
import {GlobalContext} from '../../context/GlobalState';
import {Form, Button} from 'react-bootstrap'

const AddProduct = props => {

  const addProduct = useContext(GlobalContext);

  const handleSubmit = () => {
    console.log("Added Product");
    addProduct();
  }

  return (
    <React.Fragment >
      <div className="container">
        <h1>Add Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name of product"/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
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
