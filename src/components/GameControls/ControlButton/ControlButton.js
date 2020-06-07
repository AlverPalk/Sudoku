import React, {Fragment} from 'react';
import classes from './ControlButton.module.css';

const ControlButton = (props) => {
    let classArray = [classes.Button, classes[props.class]];

    if (props.nightMode) classArray = [classes.Button, classes[props.class], classes.NightMode]

    let button = <button className={classArray.join(' ')}>{props.title}</button>
    if (props.btnType === 'hint' && !props.activeBlockElementId) {
        classArray.push(classes.Disabled);
        button = <button disabled className={classArray.join(' ')}>{props.title}</button>
    } else if (props.btnType === 'hint') {
        button = (
            <Fragment>
                <button onMouseDown={props.getHintHandler} className={classArray.join(' ')}>{props.title}</button>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {button}
        </Fragment>
    );
};

export default React.memo(ControlButton);