import React, { Component } from "react";

function SubmitForm(props) {
  const submitHandler = (e) => {
    let allInputs = Array.from(document.querySelectorAll("input"));
    let inputValues = [];
    for (let i = 0; i < allInputs.length - 1; i++) {
      inputValues = inputValues.concat(allInputs[i].value);
    }
    console.log(inputValues);
  };

  const { allData } = props;
  return <input type="submit" value="Submit" onClick={submitHandler} />;
}

export default SubmitForm;
