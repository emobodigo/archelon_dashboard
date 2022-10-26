import React from "react";
import Wrapper from "../Container/Wrapper";

interface Props {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

const Card: React.FC<Props> = (props) => {
  return (
    <Wrapper className="ae-card" style={props.style}>
      {props.children}
    </Wrapper>
  );
};

export default Card;
