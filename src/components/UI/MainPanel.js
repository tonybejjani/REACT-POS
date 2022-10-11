/** @format */
import React from 'react';
import './MainPanel.css';

const MainPanel = (props) => {
  const classes = 'mainPanel ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default MainPanel;
