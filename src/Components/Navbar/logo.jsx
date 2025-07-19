import React from "react";
import { HashLink } from "react-router-hash-link";

const Logo = ({ onClick }) => {
  return (
    <HashLink smooth to="/#home" className="nav-item nav-link" onClick={onClick}>
      <img
        width="200px"
        height="100px"
        src="./assets/img/logo_elitelisten.png"
        alt="Logo"
      />
    </HashLink>
  );
};

export default Logo;