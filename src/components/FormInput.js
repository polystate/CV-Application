import React, { Component } from "react";
import ResumeSect from "./ResumeSect";

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.callback({
      sectionName: "",
      labelName: this.props.labelName,
      value: this.state.value,
    });
  }

  render() {
    const { labelName, placeholder, inputType, callback } = this.props;

    return (
      <li style={{ listStyle: "none" }}>
        <label htmlFor={labelName}>{labelName}</label>
        <input
          type={inputType}
          id={labelName}
          name={labelName}
          placeholder={placeholder}
          onChange={this.inputHandler}
          value={this.state.value}
          required
        />
      </li>
    );
  }
}

export default FormInput;
