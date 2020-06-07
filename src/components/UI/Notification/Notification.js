import React, { Component, Fragment } from 'react';
import classes from './Notification.module.css'

class Notification extends Component {

    render() {
        let notification = null;

        if (this.props.displayNotification) {
            notification = <div className={classes.Notification}>{this.props.msg}</div>
            setTimeout(() => {
                notification = null;
                this.props.cancelNotificationHandler();
            }, 3000)
        }

        return (
            <Fragment>{notification}</Fragment>
        );
    }
};

export default Notification;