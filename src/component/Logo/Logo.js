import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/logo.png";
const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="myLogo"></img>
    </div>
  );
};

export default logo;
