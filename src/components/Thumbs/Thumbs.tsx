import React, { Fragment } from "react";
import "./Thumbs.css";

const Thumbs: React.FC<IThumbsProps> = ({
  items,
  currentIndex,
  setActiveIndex,
}) => {
  return (
    <Fragment>
      {items.map((catalog: any, idx: any) => (
        <button
          className={`thumb-button ${
            idx === currentIndex ? "thumb-selected" : ""
          }`}
          id={idx}
          key={idx}
          data-testid={"thumb-button-" + idx}
          onClick={() => setActiveIndex(idx)}
        >
          <img id={idx} src={catalog.thumb} alt="candle" />
        </button>
      ))}
    </Fragment>
  );
};

export default Thumbs;
