import React from 'react';
import classes from './SudokuBlock.module.css';
import BlockElement from "./BlockElement/BlockElement";

const SudokuBlock = (props) => {
    let classArray = [classes.SudokuBlock];
    if (props.nightMode) classArray = [classes.SudokuBlock, classes.NightMode]

    const blockElements = props.fields.map((field) => {
        return <BlockElement
            changeHandler={props.changeHandler}
            key={field + Math.floor(Math.random() * 10000000)}
            nightMode={props.nightMode} value={field} />
    })

    return (
        <div className={ classArray.join(" ") }>
            { blockElements }
        </div>
    );
};

export default SudokuBlock;