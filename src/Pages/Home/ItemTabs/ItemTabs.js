import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ItemTabs = () => {
  return (
    <div>
      <Nav
        variant="pills"
        defaultActiveKey="/breakfast"
        className="justify-content-center my-5"
      >
        <Nav.Item>
          <Nav.Link as={HashLink} to="/breakfast">
            Break Fast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={HashLink} to="/lunch">
            Lunch
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={HashLink} to="/dinner">
            Dinner
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default ItemTabs;
