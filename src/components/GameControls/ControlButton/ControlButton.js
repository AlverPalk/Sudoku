import React from 'react';
import classes from './ControlButton.module.css';

const ControlButton = (props) => {
    let classArray = [classes.Button, classes[props.class]];

    if (props.nightMode) classArray = [classes.Button, classes[props.class], classes.NightMode]
    return (
        <button className={classArray.join(' ')}>{props.title}</button>
    );
};

export default ControlButton;