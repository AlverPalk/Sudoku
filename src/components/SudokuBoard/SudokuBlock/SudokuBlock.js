import React from 'react';
import classes from './SudokuBlock.module.css';
import BlockElement from "./BlockElement/BlockElement";

const SudokuBlock = (props) => {
    let classArray = [classes.SudokuBlock];
    if (props.nightMode) classArray = [classes.SudokuBlock, classes.NightMode]

    const blockElements = props.fields.map((field) => {
        return <BlockElement
            changeHandler={props.changeHandler}
            key={field.id}
            nightMode={props.nightMode}
            field={field}
            elementSelectHandler={props.elementSelectHandler}
        />
    })

    return (
        <div className={ classArray.join(" ") }>
            { blockElements }
        </div>
    );
};

export default SudokuBlock;