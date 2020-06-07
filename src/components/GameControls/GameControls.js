import React from 'react';
import classes from './GameControls.module.css';
import ControlButton from "./ControlButton/ControlButton";

const GameControls = (props) => {
    let classArray = [classes.GameControls];
    if (props.nightMode) classArray = [classes.GameControls, classes.NightMode]
    return (
        <div className={classArray.join(' ')}>
            <ControlButton
                title="Hint"
                class="HintButton"
                btnType="hint"
                nightMode={props.nightMode}
                activeBlockElementId={props.activeBlockElementId}
                getHintHandler={props.getHintHandler}
            />
            <ControlButton title="Check" class="CheckButton" nightMode={props.nightMode}/>
            <ControlButton title="New Game" class="NewGameButton" nightMode={props.nightMode}/>
        </div>
    );
};

export default GameControls;