import React from 'react';
import './Cart.css';
import Product from '../Product/Product'
import {Button} from 'react-bootstrap'

const Cart = props => {
    return(
    <>
        <h1 className="main__title">Your Cart : </h1>
        <Product />

        <h3>Ready to Checkout : </h3>
        <Button variant="success">Checkout</Button>
    </>);
}

export default Cart;
