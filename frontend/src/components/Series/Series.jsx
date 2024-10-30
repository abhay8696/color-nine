import React from "react";

const Series = ({ series }) => {
    return (
        <h6 className="text-h6 flex items-center justify-center uppercase bg-red-400 px-4 py-2 rounded-lg gap-2">
            <span>Series</span>{" "}
            <span className="bg-white text-black p-2 inline rounded-lg">
                {series}
            </span>
        </h6>
    );
};

export default Series;
