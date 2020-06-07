import React, {Component} from 'react';
import classes from './Timer.module.css';

class Timer extends Component {

    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.updateHandler()
        },1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isTimerRunning) {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.props.updateHandler()
                },1000);
            }
        } else {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    render() {
        let classArray = [classes.Timer];
        if (this.props.nightMode) classArray = [classes.Timer, classes.NightMode]
        return (
            <label className={ classArray.join(' ') }>
                <p>{new Date(this.props.timer * 1000).toISOString().substr(11, 8)}</p>
                <input onChange={this.props.timerToggleHandler} type="checkbox" />
                <span className={ classes.Button } />
            </label>
        );
    }
}

export default React.memo(Timer);