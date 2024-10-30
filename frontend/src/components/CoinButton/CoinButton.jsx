import React from "react";

const CoinButton = ({ imgSrc, num, clickFunction }) => {
    return (
        <img
            onClick={clickFunction}
            src={imgSrc}
            alt={`coin${num}Img`}
            className="max-w-[18%]"
        />
    );
};

export default CoinButton;
