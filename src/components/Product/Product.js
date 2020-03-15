import React from 'react';
import './Product.css';
import {Card} from 'react-bootstrap'

const Product = props => {
  return (
    <Card className="main__card">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Card.Link href="#">Add to Cart</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
