import React, {useContext} from 'react';
import './Product.css';
import {Card, Button} from 'react-bootstrap'
import {GlobalContext} from '../../context/GlobalState'

const Product = ({item}) => {

  const {addToCart} = useContext(GlobalContext);
  const {items} = useContext(GlobalContext);
  function addCart(id){
      items.forEach((item) => {
          if(item.id === id){
              addToCart(item);
          } 
      });
      console.log(id);
  }

  return (
    <Card className="main__card">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <Button>
          <Card.Link onClick={() => addCart(item.id)}>Add to Cart</Card.Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
