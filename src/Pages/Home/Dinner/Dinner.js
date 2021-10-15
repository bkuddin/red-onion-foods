import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DisplayDinner from "../DisplayDinner/DisplayDinner";
import "./Dinner.css";

const Dinner = () => {
  const [dinners, setDinners] = useState([]);
  useEffect(() => {
    fetch("dinnerFake.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);
  return (
    <div>
      <div className="dinners">
        {dinners.map((dinner) => (
          <DisplayDinner key={dinner.id} dinner={dinner}></DisplayDinner>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
