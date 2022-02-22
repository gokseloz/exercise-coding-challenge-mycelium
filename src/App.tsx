/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import {
  image1,
  image2,
  image3,
  image4,
  arrowForward,
  arrowBackward,
} from "./assets";
import { Thumbs, Viewer, ToggleSlide, Header } from "./components";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState<Items>([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideTimer, setSlideTimer] = useState<boolean>(false);
  const [slideDuration] = useState<number>(3000);

  const nextSlide = () => {
    if (activeIndex >= 3) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (activeIndex <= 0) {
      setActiveIndex(3);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let sliderInterval: NodeJS.Timer;
    if (slideTimer) {
      sliderInterval = setInterval(() => {
        if (activeIndex >= 3) {
          setActiveIndex(0);
        } else {
          setActiveIndex((prev) => prev + 1);
        }
      }, slideDuration);
    }
    return () => {
      clearInterval(sliderInterval);
    };
  }, [activeIndex, slideTimer]);

  const toggleSlide = (e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      setSlideTimer(true);
    } else {
      setSlideTimer(false);
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <Viewer catalogImage={catalogs[activeIndex].image} />
        <div className="controlButtons">
          <button
            className="nextPrevBtn"
            data-testid="prev-slide-btn"
            onClick={() => prevSlide()}
          >
            <img
              src={arrowBackward}
              alt="arrow backward"
              className="material-icons"
            ></img>
          </button>
          <Thumbs
            items={catalogs}
            currentIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <button
            className="nextPrevBtn"
            data-testid="next-slide-btn"
            onClick={() => nextSlide()}
          >
            <img
              src={arrowForward}
              alt="arrow forward"
              className="material-icons"
            ></img>
          </button>
        </div>
        <ToggleSlide toggleSlide={toggleSlide} />
      </div>
    </>
  );
}

export default App;
