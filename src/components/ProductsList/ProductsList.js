import React , {useContext} from 'react';
import './ProductsList.css';
import Product from '../Product/Product';

//Importing Context
import { GlobalContext } from '../../context/GlobalState';

const ProductsList = props => {

const {items} = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h1 className="main__title">ProductsList</h1>
      {

        //Mapping objects to be displayed
        items.map(item => (
            <Product name={item.name} price={item.price} desc={item.desc} key={item.id} />
        ))

      }
    </React.Fragment>
  );
}

export default ProductsList;
