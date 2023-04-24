import React, { useRef, useEffect, useState } from "react";

export default function Timer({milliseconds, seconds, minutes, hours, changeSeconds, changeMinutes, changeHours}){
    return (
        <div>
            <h1>Timer</h1>
            <div className="card">
                {/* <div data-timer-container>
                <p data-timer><span data-hours>{hours.toString().padStart(2, "0")}</span> : <span data-minutes>{minutes.toString().padStart(2, "0")}</span> : <span data-seconds>{seconds.toString().padStart(2, "0")}</span></p>
                </div> */}
                <form data-set-timer autoComplete="off">
                
                <p>
                    <label htmlFor="hours" hidden>Insert hours</label>
                    <input type="text" name="hours" id="hours" value={hours} onChange={changeHours}/> : 
                    <label htmlFor="minutes" hidden>Insert minutes</label>
                    <input type="text" name="minutes" id="minutes" value={minutes} onChange={changeMinutes}/> : 
                    <label htmlFor="seconds" hidden>Insert seconds</label>
                    <input type="text" name="seconds" id="seconds" value={seconds} onChange={changeSeconds}/> : 
                    <label htmlFor="milliseconds" hidden>Insert milliseconds</label>
                    <input type="text" name="milliseconds" id="milliseconds" value={milliseconds}/>
                </p>
                </form>
            </div>
        </div>
    )
}