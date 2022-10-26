import React from "react";

interface IProps {
  children?: JSX.Element | JSX.Element[];
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  value?: string;
  valueColor?: string;
}

const InteractiveCard: React.FC<IProps> = (props) => {
  const valueColor = props.valueColor ? props.valueColor : "primary";
  return (
    <div
      className="ae-dashboard-card"
      onClick={props.onClick}
      style={props.style}
    >
      <h1>{props.label}</h1>
      {props?.value && (
        <span className={`ae-dashboard-value ${valueColor}`}>
          {props.value}
        </span>
      )}
      {props.children}
    </div>
  );
};

export default InteractiveCard;
