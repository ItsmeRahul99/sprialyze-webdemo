import React from "react";
import "./CustomButton.scss";
import Button from "react-bootstrap/Button";

const CustomButton = ({
  variant = "primary",
  buttonValue,
  containerClass = "",
  leftIcon,
  rightIcon,
}) => {
  return (
    <div class={`buttonContainer ${containerClass}`}>
      <Button variant={variant}>
        {leftIcon && (
          <img src={leftIcon} className="button-icon" alt="left-icon" />
        )}
        {buttonValue}
        {rightIcon && (
          <img src={rightIcon} className="button-icon" alt="left-icon" />
        )}
      </Button>
    </div>
  );
};

export default CustomButton;
