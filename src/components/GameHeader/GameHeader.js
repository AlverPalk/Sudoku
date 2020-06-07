import React from 'react';
import classes from './GameHeader.module.css';
import ModeSwitch from "../UI/ModeSwitch/ModeSwitch";
import Timer from "../Timer/Timer";

const GameHeader = (props) => {
    let classArray = [classes.GameHeader];
    if (props.nightMode) classArray = [classes.GameHeader, classes.NightMode]
    return (
        <div className={classArray.join(' ')}>
            <ModeSwitch />
            <Timer nightMode={props.nightMode} />
        </div>
    );
};

export default GameHeader;