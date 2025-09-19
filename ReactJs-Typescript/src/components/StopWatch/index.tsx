import { useEffect, useState, type ChangeEvent } from "react";
import "./style.css";

type TimeValueType = number;

type timeTypes = {
  hour: TimeValueType;
  minute: TimeValueType;
  second: TimeValueType;
};
const StopWatch = () => {
  const [time, setTime] = useState<timeTypes>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value, 10) || 0;

    setTime((prev) => {
      const clonedTime = { ...prev };

      if (name in clonedTime) {
        clonedTime[name as keyof timeTypes] =
          numValue as timeTypes[keyof timeTypes];
      }
      console.log({ clonedTime });
      clonedTime.minute += Math.floor(clonedTime.second / 60);
      clonedTime.second = Math.floor(clonedTime.second % 60);
      clonedTime.hour += Math.floor(clonedTime.minute / 60);
      clonedTime.minute = clonedTime.minute % 60;

      return clonedTime;
    });
  };

  const resetHandler = () => {
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
    });
    setIsTimerRunning(false);
  };

  const timerStartHandler = () => {
    setIsTimerRunning(true);
  };
  console.log(time);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isTimerRunning) {
      const { hour, minute, second } = time;

      if (hour == 0 && minute == 0 && second == 0) {
        setIsTimerRunning(false);
        return;
      }

      timer = setInterval(() => {
        setTime((prev) => {
          const clonedTime = { ...prev };
          clonedTime.second--;
          if (clonedTime.second < 0) {
            clonedTime.minute--;
            clonedTime.second = 59;
            if (clonedTime.minute < 0) {
              clonedTime.hour--;
              clonedTime.minute = 59;

              if (clonedTime.hour < 0) {
                setIsTimerRunning(false);
                return {
                  hour: 0,
                  minute: 0,
                  second: 0,
                };
              }
            }
          }

          if (
            clonedTime.hour === 0 &&
            clonedTime.minute === 0 &&
            clonedTime.second === 0
          ) {
            setIsTimerRunning(false);
            return {
              hour: 0,
              minute: 0,
              second: 0,
            };
          }
          return clonedTime;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isTimerRunning]);
  return (
    <div className="container">
      <div className="input_container">
        <input
          type="text"
          name="hour"
          onChange={changeHandler}
          value={time.hour}
          placeholder="HH"
        />
        :
        <input
          type="text"
          name="minute"
          onChange={changeHandler}
          value={time.minute}
          placeholder="MM"
        />
        :
        <input
          type="text"
          name="second"
          onChange={changeHandler}
          value={time.second}
          placeholder="SS"
        />
      </div>
      <div className="action_btn">
        <button onClick={timerStartHandler}>
          {isTimerRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
