import React, { Component } from "react";
import Section from "./Section";

class MyForm extends Component {
  render() {
    return (
      <form>
        <Section sectionHeader="General Information" />
        <Section sectionHeader="Educational Experience" />
      </form>
    );
  }
}

export default MyForm;
