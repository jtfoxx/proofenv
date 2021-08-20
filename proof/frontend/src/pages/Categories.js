import React from "react";
import { Link } from "react-router-dom";
import CategoryBox from "../components/CategoryBox";

function Categories(props) {
  return (
    <section class="modules py-5">
      <div className="container">
        <h2 className="pb-5 text-center">MODULES</h2>
        <div className="categories">
          {props.categories.map((category, i) => (
            <CategoryBox category={category} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
