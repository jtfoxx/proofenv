import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box";

function Modules(props) {
  return (
    <section class="modules py-5">
      <div className="container">
        <h1 className="pb-5">ALL MODULES</h1>
        <div className="boxes">
          {props.programs.map((program, i) => (
            <Box program={program} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Modules;
