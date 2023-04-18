import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './Homepage.module.css';

const Homepage = () => {
    const dispatch = useDispatch();

    return (
        <div className={classes.MainContainer}>
            <section className={classes.First} onClick={
                () => dispatch({ type: 'UPDATE_COUNT', value: 1 })
            }>Increment + 1</section>
            <section className={classes.Second} onClick={
                () => dispatch({ type: 'UPDATE_COUNT', value: 20 })
            }>Increment + 20</section>
            <section className={classes.Third} onClick={
                () => dispatch({ type: 'UPDATE_COUNT', value: -1 })
            }>Decrement - 1</section>
            <section className={classes.Fourth} onClick={
                () => dispatch({ type: 'UPDATE_COUNT', value: -10 })
            }>Decrement - 10</section>
            <section className={classes.Second}
                onClick={() => dispatch({ type: 'UPDATE_LIKES', value: 1 })}
            >
                Like Random
            </section>
            <section className={classes.Third}
                onClick={() => dispatch({ type: 'UPDATE_DISLIKES', value: 1 })}
            >
                DisLikc Random
            </section>
        </div>
    );
}

export default Homepage;