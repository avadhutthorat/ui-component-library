import { useEffect, useRef, useState } from "react";
import ImageSection from "./image-section";
import oneImage from "./images/one.jpg";
import twoImage from "./images/two.jpg";
import threeImage from "./images/three.jpg";
import "./style.css";

const Carousel = () => {
  const [currentShowingImage, setCurrentShowingImage] = useState(0);
  const [autoMode, setAutoMode] = useState(true);
  const images = [oneImage, twoImage, threeImage];
  let timer = useRef([]);

  useEffect(() => {
    if (timer.current.length > 0) {
      return;
    }
    if (autoMode && timer.current.length == 0) {
      setAutoMode(false);
      let id = setInterval(() => {
        setCurrentShowingImage((prev) => {
          if (images.length - 1 === prev) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 2000);

      timer.current.push(id);
    }
  }, [autoMode]);

  const autoModeHandler = (flag = true) => {
    if (flag) {
      setAutoMode(true);
    } else {
      while (timer.current.length > 0) {
        let id = timer.current.pop(); // Get and remove the last ID
        clearInterval(id);
      }
      timer.current = [];
      setAutoMode(false);
    }
  };

  return (
    <div className="crl_container">
      <button
        className="crl__button--left btn"
        onClick={() => {
          setCurrentShowingImage((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              return images.length - 1;
            }
          });
        }}
      >
        {"<< Left"}
      </button>
      <ImageSection
        currentShowingImage={images[currentShowingImage]}
        autoModeHandler={autoModeHandler}
      />
      <button
        className="crl__button--right btn"
        onClick={() => {
          setCurrentShowingImage((prev) => {
            if (images.length - 1 === prev) {
              return 0;
            } else {
              return prev + 1;
            }
          });
        }}
      >
        {"Right >>"}
      </button>
    </div>
  );
};

export default Carousel;
