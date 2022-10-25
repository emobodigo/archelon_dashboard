import React from "react";
import Wrapper from "../Container/Wrapper";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<Props> = (props) => {
  return <Wrapper className="ae-card">{props.children}</Wrapper>;
};

export default Card;
