import React, { useEffect } from 'react';
import { useState } from 'react';

const Timer = (props) => {

  const [time, setTime] = useState (0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateDigits = () => {
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }
    
  const declareInterval = () => {
    const interval =  setInterval(() => {
          setTime( time - 1000 );
          calculateDigits();
       }, 1000 );
   // return () => clearInterval( interval );
  }

  useEffect( declareInterval()-, []);

  setTime(props.endDate.getTime() - props.now.getTime());

  return (
      <div className="timer" role="timer">
        <div className="col-4">
          <div className="box">
            <p id="day"> { days }</p>
            <span className="text">Days</span>
          </div>
        </div>
         <div className="col-4">
          <div className="box">
            <p id="hour">{ hours } </p>
            <span className="text">Hours</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="minute">{ minutes }</p>
            <span className="text">Minutes</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="second">{ seconds }</p>
            <span className="text">Seconds</span>
          </div>
        </div> 
      </div>
    );
};

export default Timer;