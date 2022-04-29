import React, { Component } from "react";
import FormInput from "./FormInput";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sectionHeader } = this.props;
    return (
      <section>
        <h2>{sectionHeader}</h2>
        <FormInput
          labelName="first"
          placeholder="first name"
          inputType="text"
        />
        <FormInput labelName="last" placeholder="last name" inputType="text" />
        <FormInput labelName="e-mail" placeholder="e-mail" inputType="email" />
      </section>
    );
  }
}

export default Section;
