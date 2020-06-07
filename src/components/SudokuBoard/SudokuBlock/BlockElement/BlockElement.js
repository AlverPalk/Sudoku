import React from 'react';
import classes from './BlockElement.module.css';

const BlockElement = (props) => {
    let classArray = [classes.BlockElement];
    if (props.nightMode) classArray = [classes.BlockElement, classes.NightMode]
    return (
        <div className={ classArray.join(' ') }>
            <input onChange={props.changeHandler} type="number" value={props.value} min="1" max="9"/>
        </div>
    );
};

export default BlockElement;