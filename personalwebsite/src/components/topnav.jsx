import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class TopNav extends Component{

    render() {
        return(
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Nav.Link href="#Main" style={{color: "white"}}>Main</Nav.Link>
                    <Nav.Link href="#Socials" style={{color: "white"}}>Socials</Nav.Link>
                    <Nav.Link href="#Project" style={{color: "white"}}>Project</Nav.Link>
                    <Nav.Link href="#CV" style={{color: "white"}}>CV</Nav.Link>
                </Container>
            </Navbar>
        );
    }
}

export default TopNav;