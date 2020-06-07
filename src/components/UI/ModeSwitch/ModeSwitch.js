import React, { useContext } from 'react';
import classes from './ModeSwitch.module.css';
import SettingsContext from "../../../context/settings-context";

const ModeSwitch = (props) => {

    const settingsContext = useContext(SettingsContext)

    return (
        <label className={ classes.Switch }>
            <input onChange={settingsContext.nightModeHandler} type="checkbox" checked={settingsContext.nightMode}/>
            <span className={ classes.Slider + " " + classes.NoSelect } />
        </label>
    );
};

export default ModeSwitch;