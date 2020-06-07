import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.css';
import Notification from "../../components/UI/Notification/Notification";
import * as actionTypes from '../../store/actions';

const Layout = (props) => {

    let classArray = [classes.Layout];
    if (props.nightMode) classArray = [classes.Layout, classes.NightMode]

    return (
        <div className={ classArray.join(' ') }>
            <Notification
                msg={'Possible numbers: ' + props.possible.join(', ')}
                displayNotification={props.displayNotification}
                cancelNotificationHandler={props.onCancelNotification}
            />
            { props.children }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        nightMode: state.nightMode,
        possible: state.possible,
        displayNotification: state.displayNotification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCancelNotification: () => {dispatch({type: actionTypes.CANCEL_NOTIFICATION})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);