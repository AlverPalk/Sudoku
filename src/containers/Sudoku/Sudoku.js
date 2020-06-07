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
                    <GameHeader
                        nightMode={this.props.nightMode}
                        timerUpdateHandler={this.props.onTimerUpdate}
                        timerToggleHandler={this.props.onTimerToggle}
                        isTimerRunning={this.props.isTimerRunning}
                        timer={this.props.timer}
                    />
                </SettingsContext.Provider>
                <SudokuBoard
                    elementChangeHandler={this.props.onBlockElementChange}
                    elementSelectHandler={this.props.onBlockElementSelect}
                    fields={this.props.fields}
                    nightMode={this.props.nightMode}
                />
                <GameControls
                    mobileView={this.props.mobileView}
                    nightMode={this.props.nightMode}
                    activeBlockElementId={this.props.activeBlockElementId}
                    getHintHandler={this.props.onGetHint}
                />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        nightMode: state.nightMode,
        fields: state.fields,
        mobileView: state.mobileView,
        timer: state.timer,
        isTimerRunning: state.timerRunning,
        activeBlockElementId: state.activeBlockElementId,
        possible: state.possible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNightModeChange: () => dispatch({type: actionTypes.NIGHT_MODE_CHANGE}),
        onResize: () => dispatch({type: actionTypes.RESIZE}),
        onBlockElementChange: (id, newValue) => {dispatch({type: actionTypes.BLOCK_ELEMENT_CHANGE, id: id, value: newValue})},
        onTimerUpdate: () => {dispatch({type: actionTypes.UPDATE_TIMER})},
        onTimerToggle: () => {dispatch({type: actionTypes.TIMER_TOGGLE})},
        onBlockElementSelect: (activeElementId) => {dispatch({type: actionTypes.BLOCK_ELEMENT_ACTIVE, elementId: activeElementId})},
        onGetHint: () => {dispatch({type: actionTypes.GET_HINT})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);