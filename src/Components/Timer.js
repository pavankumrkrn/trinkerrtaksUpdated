import React, { useEffect, useState } from "react";

const Timer = (props) => {
  let [time, setTime] = useState(5);
  const startTimer = () => {
    var decrement = () => {
      setTime(--time);
      if (time <= 0) {
        clearInterval(interval);
        props.update();
      }
    };
    var interval = setInterval(decrement, 1000);
  };

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mb-2">
        <buttton className="btn btn-success" onClick={startTimer}>
          Start Timer
        </buttton>
      </li>
      <li className="nav-item">
        <p className="h4" o>
          Timer : {time}
        </p>
      </li>
    </ul>
  );
};

export default Timer;
