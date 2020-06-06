import React from 'react';
import classes from './GameHeader.module.css';
import ModeSwitch from "../UI/ModeSwitch/ModeSwitch";
import Timer from "../Timer/Timer";

const GameHeader = () => {
    return (
        <div className={ classes.GameHeader }>
            <ModeSwitch />
            <Timer />
        </div>
    );
};

export default GameHeader;