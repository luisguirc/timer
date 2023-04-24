import React, { useRef, useEffect, useState } from "react";
import Timer from "./Timer";

export default function Countdown(){
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: 'Time is over!'
    })

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                if(milliseconds > 0){
                    setMilliseconds((milliseconds) => milliseconds - 10);
                } else if(seconds > 0){
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(990);
                } else if(minutes > 0){
                    setMinutes((minutes) => minutes - 1);
                    setMilliseconds(990);
                    setSeconds(59);
                } else if(hours > 0){
                    setHours((hours) => hours - 1);
                    setMilliseconds(990);
                    setSeconds(59);
                    setMinutes(59);
                }
            }, 10);
        }

        if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 10){
            setShowEndScreen({... showEndScreen, show: true});
            resetTimer();
        }

        return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning]);

    // Controls
    function startTimer(){
        if(hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0){
            setIsRunning(true);
            setShowEndScreen({... showEndScreen, show: false});
        } else {
            window.alert("Insert time to start.");
        }
    }

    function stopTimer(){
        resetTimer();
        setShowEndScreen({... showEndScreen, show: false});
    }

    function resetTimer(){
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    function pauseTimer(){
        setIsRunning(false);
    }


    //Handlers
    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    }
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    }
    const changeHours = (e) => {
        setHours(e.target.value);
    }

    return (
        <div>
            {showEndScreen.show && <h1>{showEndScreen.message}</h1>}
            <Timer milliseconds={milliseconds} seconds={seconds} minutes={minutes} hours={hours}
                changeSeconds={changeSeconds} changeMinutes={changeMinutes} changeHours={changeHours}/>

            <br />

            {!isRunning && (<button onClick={startTimer}>Start</button>)}
            {isRunning && (<button onClick={pauseTimer}>Pause</button>)}
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}