import React from 'react';
import classes from './BlockElement.module.css';

const BlockElement = (props) => {
    let classArray = [classes.BlockElement];
    if (props.nightMode && props.field.hasInitialValue) {
        classArray = [classes.BlockElement, classes.NightMode, classes.InitialValue]
    } else if (props.nightMode) {
        classArray = [classes.BlockElement, classes.NightMode]
    } else if (props.field.hasInitialValue) {
        classArray = [classes.BlockElement, classes.InitialValue]
    }
    return (
        <div className={ classArray.join(' ') }>
            <input
                key={props.field.id}
                onChange={(event) => {props.changeHandler(props.field.id, event.target.value)}}
                type="number"
                value={props.field.value}
                readOnly={props.field.hasInitialValue ? 'readOnly' : null}
                min="1" max="9"
            />
        </div>
    );
};

export default BlockElement;