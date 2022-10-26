import React from "react";

interface Props {
  scrollableHorizontal?: boolean;
  children: JSX.Element | JSX.Element[];
  columnSpan?: number;
  isEnforce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper: React.FC<Props> = (props) => {
  const scrollableHorizontal = props.scrollableHorizontal
    ? " scrollable-x"
    : "";
  const columnSpan = props.columnSpan ? ` col-span-${props.columnSpan}` : "";
  const isEnforce = props.isEnforce ? " enforce" : "";
  const className = props.className ? ` ${props.className}` : "";

  return (
    <div
      className={`ae-grid-content${className}${scrollableHorizontal}${columnSpan}${isEnforce}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
