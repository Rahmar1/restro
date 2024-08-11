import React from "react";
import logo from "../../images/logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import './Navs.css';
import '../../style.css';
const Navs = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top m-0 p-0">
            <Container>
                <Navbar.Brand href="#home" className="m-auto">
                    <img className="logo " src={logo}title="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#ex">Explore Food</Nav.Link>
                        <Nav.Link href="#review">Review</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        
                    </Nav>
                    <Nav>
                      <Nav.Link id="lastNav">0110011155</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default Navs;