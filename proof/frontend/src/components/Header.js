import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <section className="navigation">
      <nav className="navbar navbar-expand-lg navbar-green navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Proof of Success
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/categories"
              >
                Modules
              </Link>
              <a
                href="/logout_page"
                className="nav-link active"
                aria-current="page"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
