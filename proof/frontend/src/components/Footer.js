import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section class="footer p-5">
      <div className="container text-center">
        Copyright &copy; {year} JT Foxx Organization
      </div>
    </section>
  );
}

export default Footer;
