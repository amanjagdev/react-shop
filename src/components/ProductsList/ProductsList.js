import React from 'react';
import './ProductsList.css';
import Product from '../Product/Product'

const ProductsList = props => {
  return (
    <React.Fragment>
      <h1 className="main__title">ProductsList</h1>
      {

        // Mapping objects to be displayed
        database.map(item => (
            <Product name={item.name} price={item.price} desc={item.desc} key={item.id} />
        ))

      }
    </React.Fragment>
  );
}

export default ProductsList;
