import React from "react";
import "./ToogleSlide.css";

const ToogleSlide: React.FC<IToggleSlideProps> = ({ toggleSlide }) => {
  return (
    <div className="toggleSlide-wrapper">
      <input
        type="checkbox"
        data-testid="toggle-slide-show-button"
        id="toggleSlide"
        onChange={(e) => toggleSlide(e)}
      />
      <label htmlFor="toggleSlide" className="ml-6">
        Start Slide Show
      </label>
    </div>
  );
};

export default ToogleSlide;
