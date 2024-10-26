import React, { useEffect, useState } from "react";
import { getCountDown } from "../../helperFunctions";

const Clock = ({ minutes, seconds }) => {
    return (
        <div className="flex gap-2 sm:gap-2 text-7xl sm:text-8xl text-black">
            <div className="bg-white p-4 rounded-xl">{minutes}</div>
            <div className="bg-white p-4 rounded-xl">:</div>
            <div className="bg-white p-4 rounded-xl">{seconds}</div>
        </div>
    );
};

export default Clock;
