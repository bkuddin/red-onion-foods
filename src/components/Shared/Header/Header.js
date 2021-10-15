import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
  const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />;

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="shadow-lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="d-flex ">
            <img
              src={logo}
              style={{ width: "20%", cursor: "pointer" }}
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#cart">{cartIcon}</Nav.Link>

            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <Banner></Banner>
    </div>
  );
};

export default Header;
