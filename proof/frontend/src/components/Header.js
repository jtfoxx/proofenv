import React from "react";
import { Link, Redirect } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { getPrograms, getCategories, getVideos } from "../api";
export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    setAnchorEl(null);
    history.replace("/program-list/" + category.id);
    // history.push("/program-list/" + category.id);
  };

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
                onClick={handleClick}
              >
                Programs
              </Link>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {props.categories?.map((category) => (
                  <MenuItem
                    key={"category-" + category.id}
                    onClick={() => handleClose(category)}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Menu>

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
