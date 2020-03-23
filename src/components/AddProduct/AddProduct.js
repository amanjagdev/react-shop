import React, {useContext, useState} from 'react';
import './AddProduct.css';
import {GlobalContext} from '../../context/GlobalState';
// import {Form, Button} from 'react-bootstrap'

const AddProduct = props => {

  const {addProduct} = useContext(GlobalContext);

  //use state hooks to manage data of product
  const [rowno,
    setRowno] = useState(21);
  const [desc,
    setDesc] = useState('');
  const [name,
    setName] = useState('');
  const [price,
    setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: rowno,
      name,
      desc,
      price: Number(price),
      qty: 0
    }
    setRowno(rowno + 1);
    console.log(newItem);

    addProduct(newItem);
  }

  return (
    <React.Fragment >
      <div className="container">
        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="desc">Product Description</label>
            <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="price">Product Price</label>
            <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>


      </div>
    </React.Fragment>
  );
}

export default AddProduct;
