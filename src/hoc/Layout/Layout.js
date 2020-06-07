import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.css';
import * as actionTypes from '../../store/actions';
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';

const Layout = (props) => {

    if (props.displayNotification) {
        store.addNotification({
            title: "Possible values:",
            message: props.possible.join(' ') ? props.possible.join(', ') + ' (+2 min)' : 'lol',
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
        props.onCancelNotification();
    }

    let classArray = [classes.Layout];
    if (props.nightMode) classArray = [classes.Layout, classes.NightMode]

    return (
        <div className={ classArray.join(' ') }>
            <ReactNotification />
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