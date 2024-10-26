import React, { useEffect, useState } from "react";
import { getCountDown } from "../../helperFunctions";

const Clock = () => {
    const [clock, setClock] = useState(getCountDown());

    //functions
    const setTime = () => setClock(getCountDown(3));

    //side effects
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime();
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="flex gap-2 sm:gap-2 text-7xl sm:text-8xl text-black">
            <div className="bg-white p-4 rounded-xl">{clock.minutes}</div>
            <div className="bg-white p-4 rounded-xl">:</div>
            <div className="bg-white p-4 rounded-xl">{clock.seconds}</div>
        </div>
    );
};

export default Clock;
