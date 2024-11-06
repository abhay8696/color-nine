import React, { useEffect, useRef, useState } from "react";
import Clock from "../Clock/Clock";
import { generateRandom, getCountDown, getSeries } from "../../helperFunctions";
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
import NoClickLayer from "../NoClickLayer/NoClickLayer";
import EntryComp from "../EntryComp/EntryComp";

const GameBody = (props) => {
    const { currentWindow, resetTime } = props; //currentWindow = 1/3/5

    const [clock, setClock] = useState(getCountDown(resetTime));
    const [series, setSeries] = useState(getSeries(resetTime));
    const [newEntry, setNewEntry] = useState({
        series: "",
        color: "",
        bigSmall: "",
        num: "",
        resetTime,
    });

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
        ) {
            updateSeries();
        }
    }, [clock]);

    useEffect(() => {
        if (resetTime === currentWindow) hideorShow.current = "block";
        else hideorShow.current = "hidden";
    }, [currentWindow]);

    useEffect(() => {
        const ro = generateRandom();
        console.log({ resetTime, series, ...ro });
    }, [series]);

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
            <div className="w-[95%] px-4 py-8 flex flex-col gap-4 bg-white rounded-3xl relative">
                {Number(clock.seconds) <= 5 && Number(clock.minutes) === 0 ? (
                    <NoClickLayer seconds={clock.seconds} />
                ) : null}
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
                    <span className="py-2 sm:py-4 rounded-l-xl sm:rounded-l-3xl w-[100px] sm:w-[150px] text-center bg-amber-500">
                        Big
                    </span>
                    <span className="py-2 sm:py-4 rounded-r-xl sm:rounded-r-3xl w-[100px] sm:w-[150px] text-center bg-blue-500">
                        Small
                    </span>
                </div>
            </div>
            <div className="text-black rounded-xl px-4 py-2 mx-auto max-w-[500px] bg-white w-[95vw] mb-4">
                <EntryComp
                    series={"series"}
                    num={"number"}
                    color={"color"}
                    bigSmall={"big-small"}
                    tableHead={true}
                    customClass="text-sm md:text-md"
                />
                <div className="border-b border-red-100"></div>
                <EntryComp
                    series={2024110411216}
                    num={5}
                    color={"red"}
                    bigSmall={"big"}
                />
                <div className="border-b border-red-100"></div>
                <EntryComp
                    series={2024110411216}
                    num={5}
                    color={"green"}
                    bigSmall={"big"}
                />
                <div className="border-b border-red-100"></div>
                <EntryComp
                    series={2024110411216}
                    num={1}
                    color={"violet"}
                    bigSmall={"small"}
                />
            </div>
        </div>
    );
};

export default GameBody;
