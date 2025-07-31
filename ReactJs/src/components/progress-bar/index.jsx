import { useEffect, useRef, useState } from "react";
import "./style.css";

const ProgressBar = ({ duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);

  const animate = (timestamp) => {
    console.log({ timestamp });
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    const timeSpent = timestamp - startTimeRef.current;
    const percent = Math.min((timeSpent / duration) * 100, 100);
    console.log({ percent });

    setProgress(percent);
    if (percent < 100) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current); // clean up
  }, [duration]);

  const toggleProgressBar = () => {
    if (isRunning) {
      setIsRunning(false);
      cancelAnimationFrame(requestRef.current);
      startTimeRef.current = null;
    } else {
      setIsRunning(true);
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  //   You can setInterval as well. but its not performant

  // useEffect(() => {
  //     const timer = setInterval(() => {
  //         setProgress(prev => {
  //             if(prev >= 100) {
  //                 clearInterval(timer)
  //                 return prev
  //             }
  //             return prev + 5
  //         })
  //     }, 200)

  //     return () => {
  //          clearInterval(timer)
  //     }
  // }, [])

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div id="container">
          <div
            id="progress-bar"
            style={{
              transform: `translateX(${progress - 100}%)`,
            }}
          ></div>
        </div>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <button onClick={toggleProgressBar}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
