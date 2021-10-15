import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DisplayChooseUs = ({ choose }) => {
  const rightArrow = <FontAwesomeIcon icon={faArrowCircleRight} />;
  const { title, description, img } = choose;
  return (
    <div>
      <div>
        <img src={img} alt="" style={{ width: "90%" }} />
        <h3 style={{ marginTop: "20px" }}>{title}</h3>
        <p>{description}</p>
        <a style={{ cursor: "pointer" }} as={Link} to="/">
          See more{" "}
          <span style={{ color: "#45f248", fontSize: "25px" }}>
            {rightArrow}
          </span>
        </a>
      </div>
    </div>
  );
};

export default DisplayChooseUs;
