import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTabs = () => {
  return (
    <div>
      <Nav
        variant="pills"
        defaultActiveKey="/breakfast"
        className="justify-content-center"
      >
        <Nav.Item>
          <Nav.Link as={Link} to="/breakfast">
            Break Fast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/lunch">
            Lunch
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/dinner">
            Dinner
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default ItemTabs;
