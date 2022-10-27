import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  floatRight?: boolean;
}

const ButtonContainer: React.FC<IProps> = ({ children, style, floatRight }) => {
  const right = floatRight ? ` ${floatRight}` : "";
  return (
    <div className={`ae-buttonbar-container${right}`} style={style}>
      {children}
    </div>
  );
};

export default ButtonContainer;
