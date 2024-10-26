import { useState } from "react";
import Clock from "./components/Clock/Clock";
import GameBody from "./components/GameBody/GameBody";

function App() {
    return (
        <>
            <GameBody gameWindow={1} />
            <GameBody gameWindow={3} />
            <GameBody gameWindow={5} />
        </>
    );
}

export default App;

//
