import React from "react";
//assets
import clockImg from "../../assets/clock.png";

const TimeButton = (props) => {
    const { clickFunction, customClass, content, currentWindow, resetTime } =
        props;

    //functions
    const decideColor = () => {
        let str = "";
        if (currentWindow == resetTime)
            return (str = "bg-primary-gradient text-white");
        else str = "bg-inherit";
    };

    return (
        <span
            onClick={clickFunction}
            className={`aspect-square w-[100px] flex flex-col text-black items-center justify-center capitalize cursor-pointer rounded-xl ${decideColor()} px-4 py-2 ${customClass}`}
        >
            <img src={clockImg} alt="clockImg" className="max-w-[50px]" />
            {content}
        </span>
    );
};

export default TimeButton;
