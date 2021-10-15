import React from "react";

const DisplayDinner = ({ dinner }) => {
  const { name, details, price, img } = dinner;
  return (
    <div>
      <div>
        <img src={img} alt="" style={{ width: "50%" }} />
        <h3>{name}</h3>
        <p>{details}</p>
        <p style={{ color: "#333", fontSize: "20px", fontWeight: "700" }}>
          ${price}
        </p>
      </div>
    </div>
  );
};

export default DisplayDinner;
