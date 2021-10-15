import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DisplayBreakFast from "../DisplayBreakFast/DisplayBreakFast";

import "./BreakFast.css";

const BreakFast = () => {
  const [breakFast, setBreakFast] = useState([]);
  useEffect(() => {
    fetch("breakFastFake.json")
      .then((res) => res.json())
      .then((data) => setBreakFast(data));
  }, []);
  return (
    <div>
      <div className="breaks">
        {breakFast.map((breaks) => (
          <DisplayBreakFast key={breaks.key} breaks={breaks}></DisplayBreakFast>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
