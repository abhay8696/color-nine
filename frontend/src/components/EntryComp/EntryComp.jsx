import React from "react";

const EntryComp = (props) => {
    const { series, num, bigSmall, color, customClass, tableHead } = props;

    return (
        <div
            className={`${customClass} py-1 flex items-center text-center uppercase`}
        >
            <span className="w-[40%]">{series}</span>
            <span className="w-[20%]">{num}</span>
            <span className="w-[30%]">{bigSmall}</span>
            <span className="w-[10%] flex items-center justify-center">
                {tableHead ? (
                    color
                ) : (
                    <span
                        className={`bg-${color}-500 w-5 h-5 rounded-full block`}
                    ></span>
                )}
            </span>
        </div>
    );
};

export default EntryComp;
