import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DisplayLunch from "../DisplayLunch/DisplayLunch";
import "./Lunch.css";

const Lunch = () => {
  const [lunches, setLunches] = useState([]);
  useEffect(() => {
    fetch("lunchFake.json")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);
  return (
    <div>
      <div className="lunches">
        {lunches.map((lunch) => (
          <DisplayLunch key={lunch.id} lunch={lunch}></DisplayLunch>
        ))}
      </div>
      <Button className="btn-danger">Checkout Your Food</Button>
    </div>
  );
};

export default Lunch;
