import React, { Component } from 'react';
import classes from './Sudoku.module.css';
import { connect } from 'react-redux';
import GameHeader from "../../components/GameHeader/GameHeader";
import SudokuBoard from "../../components/SudokuBoard/SudokuBoard";
import GameControls from "../../components/GameControls/GameControls";
import SettingsContext from "../../context/settings-context";
import * as actionTypes from '../../store/actions';

class Sudoku extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.onResize();
    }

    render() {
        let classArray = [classes.Sudoku];
        if (this.props.nightMode) classArray = [classes.Sudoku, classes.NightMode]

        return (
            <div className={classArray.join(' ')}>
                <SettingsContext.Provider value={{ nightModeHandler: this.props.onNightModeChange, nightMode: this.props.nightMode }}>
                    <GameHeader nightMode={this.props.nightMode} />
                </SettingsContext.Provider>
                <SudokuBoard elementChangeHandler={this.props.onBLockElementChange} fields={this.props.fields} nightMode={this.props.nightMode} />
                <GameControls mobileView={this.props.mobileView} nightMode={this.props.nightMode} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        nightMode: state.nightMode,
        fields: state.fields,
        mobileView: state.mobileView
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNightModeChange: () => dispatch({type: actionTypes.NIGHT_MODE_CHANGE}),
        onResize: () => dispatch({type: actionTypes.RESIZE}),
        onBLockElementChange: () => dispatch({type: actionTypes.BLOCK_ELEMENT_CHANGE})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);