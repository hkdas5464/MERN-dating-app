import React from "react";
import "./Header.css";
import { Person } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Forum } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" />
      </IconButton>
      <img className="header__logo" src="logo192.png" alt="header" />
      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
