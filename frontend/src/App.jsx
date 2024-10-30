import { useState } from "react";
import Clock from "./components/Clock/Clock";
import GameBody from "./components/GameBody/GameBody";
import TimeButton from "./components/TimeButton/TimeButton";

function App() {
    const [currentWindow, setCurrentWindow] = useState(1);

    //functions
    const changeWindow = (num) => setCurrentWindow(num);
    return (
        <div className="h-[100vh] w-[100vw] relative">
            <div className="rounded-b-[2.5rem] absolute top-0 left-0 right-0 bottom-[40vh] sm:bottom-[50vh] bg-primary-gradient -z-1"></div>
            <h1 className="text-center py-4 mb-4 text-white">COLOR-9 GAME</h1>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center rounded-xl mb-4 bg-white">
                    <TimeButton
                        clickFunction={() => changeWindow(1)}
                        currentWindow={currentWindow}
                        resetTime={1}
                        content="1 min"
                    />
                    <TimeButton
                        clickFunction={() => changeWindow(3)}
                        currentWindow={currentWindow}
                        resetTime={3}
                        content="3 min"
                    />
                    <TimeButton
                        clickFunction={() => changeWindow(5)}
                        currentWindow={currentWindow}
                        resetTime={5}
                        content="5 min"
                    />
                </div>
            </div>
            <GameBody currentWindow={currentWindow} resetTime={1} />
            <GameBody currentWindow={currentWindow} resetTime={3} />
            <GameBody currentWindow={currentWindow} resetTime={5} />
        </div>
    );
}

export default App;

//
