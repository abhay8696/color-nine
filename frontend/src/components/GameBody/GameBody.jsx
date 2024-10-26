import React, { useEffect, useState } from "react";
import Clock from "../Clock/Clock";
import { getCountDown, getSeries } from "../../helperFunctions";
import Series from "../Series/Series";

const GameBody = (props) => {
    const { gameWindow } = props;

    const [clock, setClock] = useState(getCountDown());
    const [series, setSeries] = useState(getSeries(gameWindow));

    //functions
    const updateClock = () => setClock(getCountDown(gameWindow));
    const updateSeries = () => setSeries(getSeries(gameWindow));

    //side effects
    useEffect(() => {
        const intervalId_sec = setInterval(() => {
            updateClock();
        }, 1000); // Update every second

        return () => clearInterval(intervalId_sec); // Cleanup on unmount
    }, []);

    useEffect(() => {
        //update only when clock resets
        if (
            Number(clock.minutes) === gameWindow - 1 &&
            Number(clock.seconds) === 59
        )
            updateSeries();
    }, [clock]);

    return (
        <div>
            <h1>GAME Window: {gameWindow}</h1>
            <Clock minutes={clock.minutes} seconds={clock.seconds} />
            <Series series={series} />
        </div>
    );
};

export default GameBody;
