import React from "react";
import classes from "./TableHeader.module.css";
import TableItem from "./TableItem/TableItem";
const tableHeader = props => {
  return (
    <div>
      <TableItem>{props.tableItem}</TableItem>
    </div>
  );
};

export default tableHeader;
