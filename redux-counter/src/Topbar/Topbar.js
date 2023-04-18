import React from 'react';
import { connect, useSelector } from 'react-redux';

import classes from './Topbar.module.css';

const Topbar = (props) => {
    const dislike = useSelector(state => state.dislike.dislikes);
    const like = useSelector(state => state.like.likes);

    return (
        <div className={classes.Topbar}>
            <h2>Counter: {props.counter}</h2>
            <h2>Likes: {like}</h2>
            <h2>Dislikes: {dislike}</h2>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
    };
}

export default connect(mapStateToProps)(Topbar);