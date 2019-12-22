import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div className={classes.Logo}>
        <Logo></Logo>
      </div>
      <nav></nav>
    </header>
  );
};

export default toolbar;
