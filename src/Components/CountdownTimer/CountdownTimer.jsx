import React, { useState, useEffect } from "react";
import classes from './countdownTimer.module.scss';

function CountdownTimer(props) {

  const calculateTimeLeft = () => {
    const difference = +new Date("2020-01-26") - + new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = ({
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      });
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  },[]);

  const timeComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    timeComponents.push(
      <span key={interval} className={classes.fon}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className={classes.tong}>
      <h1 className="text-danger"> Sắp Tết rồi!!! Chỉ còn....</h1>
      {/* <h2>Nhân dịp khai trương shop chúng tôi khuyến mãi những khóa học sau:</h2> */}
      <div className={classes.countt}>
        {timeComponents.length ? timeComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default CountdownTimer;
