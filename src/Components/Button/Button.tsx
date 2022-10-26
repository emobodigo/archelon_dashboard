import React from "react";
import { ButtonType } from "../../config/config";

interface IProps {
  onClick?: () => void;
  children: JSX.Element | string;
  style?: React.CSSProperties;
  buttonClass?: ButtonType | string;
}

const Button: React.FC<IProps> = (props) => {
  const buttonClass = props.buttonClass ? ` ${props.buttonClass}` : " primary";
  return (
    <div
      className={`ae-button${buttonClass}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
