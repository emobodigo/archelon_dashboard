import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
  label: string;
  onClick: () => void;
}

const InteractiveCard: React.FC<IProps> = (props) => {
  return (
    <div className="ae-dashboard-card" onClick={props.onClick}>
      <h1>{props.label}</h1>
      {props.children}
    </div>
  );
};

export default InteractiveCard;
