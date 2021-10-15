import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner ">
      <Form className="d-flex mx-auto search-bar" style={{ width: "50%" }}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Banner;
