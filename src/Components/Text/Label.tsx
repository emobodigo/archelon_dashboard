import React from "react";
import { LabelSize } from "../../config/config";

interface IProps {
  style?: React.CSSProperties;
  size?: LabelSize | string;
  children: JSX.Element | JSX.Element[] | string;
}

const Label: React.FC<IProps> = (props) => {
  const size = props.size ? ` ${props.size}` : "";
  return (
    <div className={`ae-grid-label${size}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Label;
