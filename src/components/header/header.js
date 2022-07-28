import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import {useNavigate} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faUnlock} from '@fortawesome/free-solid-svg-icons'

//This contains the re-act navbar which will be used across all the pages
function Header() {
  //user information which used to display login and logout button
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigateToLink = async () => {
    try {
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  const authButton = () => {
    if (user === null) {
      return (
            <Button variant="secondary" onClick={navigateToLink} to="/login">
              <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faLock} /> Login</Button>
      )

    } else {
      return <Button variant="secondary" onClick={handleLogout}>
        <FontAwesomeIcon style={{paddingRight: "1rem"}} icon={faUnlock} /> Logout</Button>
    }
  }

  return (
  <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="mb-3">
    <Navbar.Brand as={Link} to="/"><img src={require('./../../assets/images/logo.png')}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/demo">Demo</Nav.Link>
        <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Form inline className="mx-3">
      {authButton()}
    </Form>
  </Navbar>
  );
}

export default Header;