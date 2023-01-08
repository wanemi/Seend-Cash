import React from 'react';
import classes from "./LoadingState.module.css";


const LoadingState = props => {
  return (
    <div className={classes.spinner}>
      <div className={classes.ring}></div>
    </div>
  );
};

export default LoadingState;