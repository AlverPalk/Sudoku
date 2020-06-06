import React from 'react';
import classes from './Timer.module.css';

const Timer = () => {
    return (
        <label className={ classes.Timer }>
            <p>30:22</p>
            <input type="checkbox" />
            <span className={ classes.Button } />
        </label>
    );
};

export default Timer;