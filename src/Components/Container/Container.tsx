import React from "react";

interface Props {
  columns?: number;
  ratio?: {
    r1: number;
    r2: number;
    r3?: number;
  };
  columnSpan?: number;
  isEnforce?: boolean;
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = (props) => {
  const isEnforce = props.isEnforce ? " enforce" : "";
  const columnSpan = props.columnSpan ? ` col-span-${props.columnSpan}` : "";
  const className = props.className ? ` ${props.className}` : "";

  let col;
  if (props.ratio) {
    col = props.ratio ? `ratio-${props.ratio.r1}-${props.ratio.r2}` : "";
    if (props.ratio?.r3) {
      col += `-${props.ratio.r3}`;
    }
  } else {
    col = props.columns ? ` column-${props.columns}` : "";
  }

  return (
    <div
      className={`ae-grid-container${className}${col}${columnSpan}${isEnforce}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
