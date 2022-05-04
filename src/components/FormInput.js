import React, { useState } from "react";

function FormInput(props) {
  const {
    labelName,
    placeholder,
    inputType,
    inputHandler,
    inputState,
    activeInputs,
  } = props;
  let onPageLabel = labelName.replaceAll("_", " ");
  const [labelStyle, setLabelStyle] = useState({
    textDecoration: "none",
  });
  const labelHandler = (e) => {
    if (e.target.value) {
      setLabelStyle({
        fontWeight: "bold",
      });
    } else
      setLabelStyle({
        fontWeight: "normal",
      });
  };

  return (
    <li style={{ listStyle: "none" }}>
      <label style={labelStyle} htmlFor={labelName}>
        {onPageLabel}:
      </label>
      <input
        onInput={labelHandler}
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
