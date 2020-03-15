import React from 'react';
import './ProductsList.css';
import Product from '../Product/Product'

const database = [
  {
    id: 1,
    name: "Red Tshirt",
    price: 20,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat di" +
        "cta, itaque veniam natus fugit consectetur voluptatem doloribus amet eos."
  }, {
    id: 2,
    name: "Green Tshirt",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat di" +
        "cta, itaque veniam natus fugit consectetur voluptatem doloribus amet eos."
  }
]

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
