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

  const createTimer = () => {
    
  };

  const [timer, setTimer] = useState(0);

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="card">
        <div data-timer-container>
          <p data-timer><span data-hours>00</span> : <span data-minutes>00</span> : <span data-seconds>00</span></p>
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
          <button type="submit" onClick={createTimer}>
            Start timer
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;
