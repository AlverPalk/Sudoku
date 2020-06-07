import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.css';

const Layout = (props) => {
    let classArray = [classes.Layout];
    if (props.nightMode) classArray = [classes.Layout, classes.NightMode]

    return (
        <div className={ classArray.join(' ') }>
            { props.children }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        nightMode: state.nightMode
    }
}

export default connect(mapStateToProps)(Layout);