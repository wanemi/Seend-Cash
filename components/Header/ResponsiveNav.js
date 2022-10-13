import React from "react";
import classes from "./ResponsiveNav.module.css";

const ResponsiveNav = (props) => {
  return <aside className={classes.side}>{props.children}</aside>;
};

export default ResponsiveNav;
