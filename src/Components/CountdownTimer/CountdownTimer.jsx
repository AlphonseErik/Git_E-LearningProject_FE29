import React, { useState, useEffect } from "react";
import classes from './CountdownTimer.module.scss';

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-01-01") - + new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className={classes.fon}>
             {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return(
       <div className={ classes.tong}>
        <h1>Wel come to shop H & R</h1>
            <h2>Nhân dịp khai trương shop chúng tôi khuyến mãi những khóa học sau:</h2>
            <div className={classes.countt}>
            <span>Kết thúc trong :</span>  {timerComponents.length ?   timerComponents : <span>Time's up!</span>}
            </div>
       </div>
  );
}

