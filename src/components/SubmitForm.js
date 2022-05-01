import React, { Component } from "react";
import FormInput from "./FormInput";
import Section from "./Section";

export class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e) => {
    // e.preventDefault();
    let allInputs = Array.from(document.querySelectorAll("input"));
    let inputValues = [];
    for (let i = 0; i < allInputs.length - 1; i++) {
      inputValues = inputValues.concat(allInputs[i].value);
    }
    console.log(inputValues);
  };

  render() {
    const { allData } = this.props;
    return <input type="submit" value="Submit" onClick={this.submitHandler} />;
  }
}

export default SubmitForm;
