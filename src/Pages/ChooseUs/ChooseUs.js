import React, { useEffect, useState } from "react";
import DisplayChooseUs from "../DisplayChooseUs/DisplayChooseUs";
import "./ChooseUs.css";

const ChooseUs = () => {
  const [chooses, setChooses] = useState([]);
  useEffect(() => {
    fetch("chooseUsFake.json")
      .then((res) => res.json())
      .then((data) => setChooses(data));
  }, []);

  return (
    <div>
      <div className="chooses">
        {chooses.map((choose) => (
          <DisplayChooseUs choose={choose}></DisplayChooseUs>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
