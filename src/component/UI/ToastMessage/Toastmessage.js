import React from "react";
import classes from "./ToastMessage.module.css";
const toastmessage = props => {
  let attachedClasses = [classes.toastbar];
  if (props.show) {
    attachedClasses.push(classes.show);
  }
  return <div className={attachedClasses.join(" ")}>{props.children}</div>;
};

export default toastmessage;
