import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
           
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />


        </div>
    )
}

export default navbar;