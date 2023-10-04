import React from "react";
import "./LeftArrowButton.scss";

interface RightArrowButtonProps {
  onClick: () => void;
}

const RightArrowButton: React.FC<RightArrowButtonProps> = ({ onClick }) => {
  const handleClick = () => {

    onClick();
  };

  return (
    <button className="right-arrow-button" onClick={handleClick}>
      <span className="right-arrow-icon"></span>
    </button>
  );
};

export default RightArrowButton;