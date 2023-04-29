/** @format */
import React from 'react';
import classes from './MainPanel.module.css';

const MainPanel = (props) => {
  return <div className={classes['main-panel']}>{props.children}</div>;
};

export default MainPanel;
