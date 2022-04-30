import React, { Component } from "react";
import uniqid from "uniqid";

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
  }

  render() {
    const { labelName, placeholder, inputType } = this.props;

    return (
      <li style={{ listStyle: "none" }}>
        <label htmlFor={labelName}>{labelName}</label>
        <input
          onChange={this.inputHandler}
          type={inputType}
          id={labelName}
          name={labelName}
          placeholder={placeholder}
          required
        />
      </li>
    );
  }
}

export default FormInput;
