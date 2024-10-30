import React, { useEffect, useRef, useState } from "react";
import Clock from "../Clock/Clock";
import { getCountDown, getSeries } from "../../helperFunctions";
import Series from "../Series/Series";

const GameBody = (props) => {
    const { currentWindow, resetTime } = props; //currentWindow = 1/3/5

    const [clock, setClock] = useState(getCountDown(resetTime));
    const [series, setSeries] = useState(getSeries(resetTime));

    //variables
    const hideorShow = useRef("hidden");

    //functions
    const updateClock = () => setClock(getCountDown(resetTime));
    const updateSeries = () => setSeries(getSeries(resetTime));

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
            Number(clock.minutes) === resetTime - 1 &&
            Number(clock.seconds) === 59
        )
            updateSeries();
    }, [clock]);

    useEffect(() => {
        if (resetTime === currentWindow) hideorShow.current = "block";
        else hideorShow.current = "hidden";
    }, [currentWindow]);

    return (
        <div
            className={`mx-auto max-w-[500px] ${hideorShow.current} flex flex-col items-center gap-4`}
        >
            <h3 className="text-h3">Reset: {resetTime}min</h3>
            <Clock minutes={clock.minutes} seconds={clock.seconds} />
            <Series series={series} />
        </div>
    );
};

export default GameBody;
