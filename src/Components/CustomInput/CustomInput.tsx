import React from "react";

interface Props {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  type?: string;
}

const CustomInput = (props: Props) => {
  return (
    <input
      type={props.type || "text"}
      onChange={props.onchange}
      className={`ae-text-input ${props.className}`}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props?.autoComplete || "off"}
      value={props.value}
    />
  );
};

export default CustomInput;
