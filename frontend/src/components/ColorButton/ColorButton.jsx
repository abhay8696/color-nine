import React from "react";

const ColorButton = (props) => {
    const { color, text, clickFunction, bg } = props;
    return (
        <div className={`capitalize text-center ${bg} px-8 py-2 rounded-lg`}>
            {text}
        </div>
    );
};

export default ColorButton;
