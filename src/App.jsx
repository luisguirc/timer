import React, { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  // const hours = useRef(null);
  // useEffect(() => {
  //   const hoursElement = hours.current;
  //   const minutesElement = minutes.current;
  //   const secondsElement = seconds.current;
  // })

  // https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
  // https://www.react-hook-form.com/api/useform/handlesubmit/
  // https://react.dev/learn/referencing-values-with-refs
  // https://bobbyhadz.com/blog/react-document-queryselector

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("teste");
    console.log("hours", event.target[0].value);
    console.log("minutes", event.target[1].value);
    console.log("seconds", event.target[2].value);
  }

  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(10);

  hours = Math.floor(totalTimeInSeconds / (60 * 60));
  minutes = Math.floor((totalTimeInSeconds - 60*60*hours) / 60);
  seconds = totalTimeInSeconds - 60*60*hours - 60*minutes;

  useEffect(() => {
    if(totalTimeInSeconds === 0){
      alert("tempo acabou");
      return
    }else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
  }, [totalTimeInSeconds])

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="card">
        <div data-timer-container>
          <p data-timer><span data-hours>{hours.toString().padStart(2, "0")}</span> : <span data-minutes>{minutes.toString().padStart(2, "0")}</span> : <span data-seconds>{seconds.toString().padStart(2, "0")}</span></p>
        </div>
        <form data-set-timer autoComplete="off" onSubmit={handleSubmit}>
        
          <p>
            <label htmlFor="hours" hidden>Insert hours</label>
            <input type="text" name="hours" id="hours" placeholder="00"/> : 
            <label htmlFor="minutes" hidden>Insert minutes</label>
            <input type="text" name="minutes" id="minutes" placeholder="00"/> :  
            <label htmlFor="seconds" hidden>Insert seconds</label>
            <input type="text" name="seconds" id="seconds" placeholder="00"/>
          </p>
          <button type="submit">
            Start timer
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;
