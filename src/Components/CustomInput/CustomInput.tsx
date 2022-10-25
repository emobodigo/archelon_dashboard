import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  type?: string;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

const CustomInput = (props: Props) => {
  return (
    <input
      type={props.type || "text"}
      onChange={props.onChange}
      className={`ae-text-input ${props.className}`}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props?.autoComplete || "off"}
      value={props.value}
      onKeyUp={props.onKeyUp}
    />
  );
};

export default CustomInput;
