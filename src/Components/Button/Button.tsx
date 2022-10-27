import React from "react";
import { IconType } from "react-icons";
import { ButtonType } from "../../config/enum";

interface IProps {
  label: string;
  icon?: IconType;
  onClick?: () => void;
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
      {props.icon && <props.icon className="ae-react-icon" />}
      <p>{props.label}</p>
    </div>
  );
};

export default Button;
