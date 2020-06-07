import React from 'react';
import classes from './SudokuBoard.module.css';
import SudokuBlock from "./SudokuBlock/SudokuBlock";

const SudokuBoard = (props) => {
    let classArray = [classes.SudokuBoard];
    if (props.nightMode) classArray = [classes.SudokuBoard, classes.NightMode]
    const sudokuBlocks = props.fields.map((field) => {
        return <SudokuBlock
            key={field + Math.floor(Math.random() * 100000000)}
            changeHandler={props.elementChangeHandler}
            fields={field}
            nightMode={props.nightMode} />
    })

    return (
        <div className={ classArray.join(' ') }>
            {sudokuBlocks}
        </div>
    );
};

export default React.memo(SudokuBoard);