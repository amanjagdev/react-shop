import React, {useContext} from 'react';
import './Product.css';
import {Card, Button} from 'react-bootstrap'
import {GlobalContext} from '../../context/GlobalState'

const Product = (props) => {

  const {addToCart} = useContext(GlobalContext);
  const {removeFromCart} = useContext(GlobalContext);
  
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
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {props.item.price}</Card.Subtitle>
        <Card.Text>
          {props.item.desc}
        </Card.Text>
        <Button>
          {(props.from === "cart")?<Card.Link onClick={() => removeFromCart(props.item.id)}>Remove</Card.Link>:<Card.Link onClick={() => addCart(props.item.id)}>Add to Cart</Card.Link>
          }
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
