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
            <Timer
                updateHandler={props.timerUpdateHandler}
                nightMode={props.nightMode}
                timer={props.timer}
                isTimerRunning={props.isTimerRunning}
                timerToggleHandler={props.timerToggleHandler}
            />
        </div>
    );
};

export default GameHeader;