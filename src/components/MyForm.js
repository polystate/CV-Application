import React, { Component } from "react";
import Section from "./Section";
import uniqid from "uniqid";
import SubmitForm from "./SubmitForm";

class MyForm extends Component {
  constructor(props) {
    super(props);

    // this.submitHandler = this.submitHandler.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback = (childData) => {
    this.props.callback(childData);
  };

  render() {
    const { allSections, callback } = this.props;

    return (
      <form onSubmit={this.submitHandler}>
        {Object.values(allSections).map((section) => {
          return (
            <Section
              key={uniqid()}
              sectionHeader={section.header}
              allSections={section}
              callback={this.handleCallback}
            />
          );
        })}
        <SubmitForm />
        {/* <input type="submit" value="Submit" /> */}
        {/* <SubmitForm allData="some random data" /> */}
      </form>
    );
  }
}

export default MyForm;

/* <Section
          sectionHeader={allSections.generalInfo.header}
          allSections={allSections.generalInfo}
        />
        <Section
          sectionHeader={allSections.eduExperience.header}
          allSections={allSections.eduExperience}
        /> */
