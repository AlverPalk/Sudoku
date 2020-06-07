import React from 'react';
import classes from './Timer.module.css';

const Timer = (props) => {
    let classArray = [classes.Timer];
    if (props.nightMode) classArray = [classes.Timer, classes.NightMode]
    return (
        <label className={ classArray.join(' ') }>
            <p>30:22</p>
            <input type="checkbox" />
            <span className={ classes.Button } />
        </label>
    );
};

export default Timer;