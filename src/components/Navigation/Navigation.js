import React from 'react';
import './Navigation.css';
import {Navbar, Nav , NavDropdown , Form , FormControl, Button} from 'react-bootstrap'

const Navigation = props => {
    return(
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    </>);
}

export default Navigation;
