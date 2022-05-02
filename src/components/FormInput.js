import React, { Component } from "react";
import ResumeSect from "./ResumeSect";

function FormInput(props) {
  const { labelName, placeholder, inputType, inputHandler, inputState } = props;
  return (
    <li style={{ listStyle: "none" }}>
      <label htmlFor={labelName}>{labelName}</label>
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
