import React from 'react';
import './Navigation.css';
import {Navbar, Nav } from 'react-bootstrap'
import { withRouter } from "react-router";

const Navigation = props => {
    return(
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => (props.history.push('/'))} >Home</Nav.Link>
                    <Nav.Link onClick={() => (props.history.push('/cart'))} >Cart</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    </>);
}

const NavigationWithRouter = withRouter(Navigation)
export default NavigationWithRouter;