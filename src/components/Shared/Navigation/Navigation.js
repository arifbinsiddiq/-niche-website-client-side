import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <>
            <Navbar className="bg-nav" expand="lg">
                <Container>
                    <Navbar.Brand id="nav-brand" as={Link} to="/home">ABS Motobike</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link id="nav-item" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link id="nav-item" as={Link} to="/services">Services</Nav.Link>
                            
                            
                            {
                                user?.email ? <>
                                    <Nav.Link id="nav-item" as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    <li className="log-out">
                                    <button onClick={logout}>Log Out</button>
                                </li>
                                </> 
                                    :
                                    <Nav.Link id="nav-item" as={Link} to="/login">Login</Nav.Link>
                            }




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;