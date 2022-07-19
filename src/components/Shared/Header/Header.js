import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import icon from '../../../images/logo2.png';
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <>
            <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                bg="primaryyuio  "
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={icon}
                            width="120"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>

                            {/* {!users.email ? (
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            ) : (
                                <button onClick={logOut}>SignOut</button>
                            )} */}
                        </Nav>
                        {/* {users.email ? (
                            <Navbar.Text>
                                Signed in as:{" "}
                                <a href="#login">{users.displayName}</a>
                            </Navbar.Text>
                        ) : (
                            ""
                        )} */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;