import React, { Fragment } from 'react';
import GameHeader from "../../components/GameHeader/GameHeader";

const Sudoku = () => {
    return (
        <Fragment>
            <GameHeader />
            <div>SudokuBoard</div>
            <div>GameControls</div>
        </Fragment>
    );
};

export default Sudoku;