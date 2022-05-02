import React from "react";

function FormInput(props) {
  const { labelName, placeholder, inputType, inputHandler, inputState } = props;
  let onPageLabel = labelName.replaceAll("_", " ");
  return (
    <li style={{ listStyle: "none" }}>
      <label htmlFor={labelName}>{onPageLabel}</label>
      <input
        type={inputType}
        id={labelName}
        name={labelName}
        placeholder={placeholder}
        onChange={inputHandler}
        value={inputState}
        required
      />
    </li>
  );
}

export default FormInput;
