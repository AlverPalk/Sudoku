import React from 'react';
import classes from './ModeSwitch.module.css';

const ModeSwitch = () => {
    return (
        <label className={ classes.Switch }>
            <input type="checkbox"/>
            <span className={ classes.Slider + " " + classes.NoSelect } />
        </label>
    );
};

export default ModeSwitch;