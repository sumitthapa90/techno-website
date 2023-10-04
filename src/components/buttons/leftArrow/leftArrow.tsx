import React from "react";
import "./LeftArrowButton.scss";

interface LeftArrowButtonProps {
  onClick: () => void;
}

const LeftArrowButton: React.FC<LeftArrowButtonProps> = ({ onClick }) => {
  return (
    <button className="left-arrow-button" onClick={onClick}>
      <span className="left-arrow-icon"></span>
    </button>
  );
};

export default LeftArrowButton;