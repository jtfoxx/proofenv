import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPrograms } from "../api";
import Box from "../components/Box";

function ProgramList(props) {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    (async () => {
      const programs = await getPrograms(props.match.params.category);
      setPrograms(programs);
    })();
  }, [props.match.params.category]);

  return (
    <section class="modules py-5">
      <div className="container">
        <h3 className="pb-5 text-center">{programs[0]?.category}</h3>
        <div className="boxes">
          {programs.map((program, i) => (
            <Box program={program} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramList;
