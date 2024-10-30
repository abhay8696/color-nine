import React, { useEffect, useRef, useState } from "react";
import Clock from "../Clock/Clock";
import { getCountDown, getSeries } from "../../helperFunctions";
import Series from "../Series/Series";
import ColorButton from "../ColorButton/ColorButton";
import CoinButton from "../CoinButton/CoinButton";
//assets
import coin_0 from "../../assets/coin0.png";
import coin_1 from "../../assets/coin1.png";
import coin_2 from "../../assets/coin2.png";
import coin_3 from "../../assets/coin3.png";
import coin_4 from "../../assets/coin4.png";
import coin_5 from "../../assets/coin5.png";
import coin_6 from "../../assets/coin6.png";
import coin_7 from "../../assets/coin7.png";
import coin_8 from "../../assets/coin8.png";
import coin_9 from "../../assets/coin9.png";

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

    //functions
    const displayCoins = () => {
        let arr = [];
        let coinImages = [
            coin_0,
            coin_1,
            coin_2,
            coin_3,
            coin_4,
            coin_5,
            coin_6,
            coin_7,
            coin_8,
            coin_9,
        ];

        coinImages.forEach((img, i) => {
            arr.push(<CoinButton num={i} imgSrc={img} />);
        });

        return arr;
    };

    return (
        <div
            className={`mx-auto max-w-[500px] ${hideorShow.current} flex flex-col items-center gap-4`}
        >
            <h3 className="text-h3">Reset: {resetTime}min</h3>
            <Clock minutes={clock.minutes} seconds={clock.seconds} />
            <Series series={series} />
            <div className="w-[100%] p-4 flex flex-col gap-4 ">
                <div className="flex items-center justify-around w-[100%]">
                    <ColorButton bg="bg-green-500" text="green" color="green" />
                    <ColorButton
                        bg="bg-violet-500"
                        text="violet"
                        color="violet"
                    />
                    <ColorButton bg="bg-red-500" text="red" color="red" />
                </div>
                <div className="flex flex-wrap justify-between">
                    {displayCoins()}
                </div>
                <div className="uppercase flex justify-center">
                    <span className="py-4 rounded-l-3xl w-[150px] text-center bg-amber-500">
                        Big
                    </span>
                    <span className="py-4 rounded-r-3xl w-[150px] text-center bg-blue-500">
                        Small
                    </span>
                </div>
            </div>
        </div>
    );
};

export default GameBody;
