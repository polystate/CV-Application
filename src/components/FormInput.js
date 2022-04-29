import React, { Component } from "react";

class FormInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { labelName, placeholder, inputType } = this.props;

    return (
      <>
        <li style={{ listStyle: "none" }}>
          <label htmlFor={labelName}>{labelName}</label>
          <input
            type={inputType}
            id={labelName}
            name={labelName}
            placeholder={placeholder}
            required
          />
        </li>
      </>
    );
  }
}

export default FormInput;
