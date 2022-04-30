import React, { Component } from "react";
import FormInput from "./FormInput";

export class SubmitForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allData } = this.props;
    console.log(allData);
    return <input type="submit" value="Submit" />;
  }
}

export default SubmitForm;
