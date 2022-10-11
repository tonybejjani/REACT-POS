/** @format */

import React from 'react';

import './Spacer.css';
const Spacer = (props) => {
  const classes = 'spacer ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Spacer;
