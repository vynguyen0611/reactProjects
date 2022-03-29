import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
  // inject 2 values: one from Card module, and 1 coming from outside
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
