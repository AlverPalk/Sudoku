import React from 'react';
import classes from './BlockElement.module.css';

const BlockElement = (props) => {
    let classArray = [classes.BlockElement];
    if (props.nightMode) classArray = [classes.BlockElement, classes.NightMode]
    return (
        <div className={ classArray.join(' ') }>
            <input
                key={props.field.id}
                onChange={(event) => {props.changeHandler(props.field.id, event.target.value)}}
                type="number"
                value={props.field.value}
                min="0" max="9"/>
        </div>
    );
};

export default BlockElement;