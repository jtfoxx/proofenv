import React from "react";
import { Link } from "react-router-dom";

function Box({ program }) {
  return (
    <div className="box">
      <Link to={"/program/" + program.id} style={{ textDecoration: "none" }}>
        <img src={program.image} alt={program.title} class="img-fluid" />
      </Link>
      <div class="box-content">
        <h4 className="py-1">{program.name}</h4>
        <Link className="btn-blue mb-2" to={"/program/" + program.id}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Box;
