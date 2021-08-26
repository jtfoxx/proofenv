import React from "react";
import { Link } from "react-router-dom";

function CategoryBox({ category }) {
  return (
    <div className="category card text-center p-2">
      <Link
        to={"/program-list/" + category.id}
        style={{ textDecoration: "none" }}
      >
        {category?.image && (
          <img src={category.image} alt={category.name} class="img-fluid" />
        )}
        <h4 className="pt-2">{category.name}</h4>
      </Link>
      {/* <div className="card-content text-center">
        <Link
          className="btn-blue mb-2 btn-sm"
          to={"/program-list/" + category.id}
        >
          Get Started
        </Link>
      </div> */}
    </div>
  );
}

export default CategoryBox;
