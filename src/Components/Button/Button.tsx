import React from "react";

interface IProps {
  onClick: () => void;
  children: JSX.Element | string;
  style?: React.CSSProperties;
  //   TODO give this component class enum
}

const Button: React.FC<IProps> = (props) => {
  return (
    <div
      className="gs-button primary"
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
