import React from "react";
import { Link } from "react-router-dom";

function Box({ program }) {
  return (
    <div className="box">
      <Link to={"/program/" + program.id} style={{ textDecoration: "none" }}>
        <img src={program.image} alt={program.name} class="img-fluid" />
      </Link>
      <div className="box-content text-center">
        <Link className="btn-blue mb-2" to={"/program/" + program.id}>
          {program.name}
        </Link>
      </div>
    </div>
  );
}

export default Box;
