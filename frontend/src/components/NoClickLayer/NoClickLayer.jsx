import React from "react";

const NoClickLayer = ({ seconds }) => {
    return (
        <div className="absolute rounded-3xl top-0 left-0 right-0 bottom-0 bg-[#000000b0] flex items-center justify-center">
            <div className="font-bold text-[10rem]">{seconds}</div>
        </div>
    );
};

export default NoClickLayer;
