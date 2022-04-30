import React, { Component } from "react";
import Section from "./Section";
import uniqid from "uniqid";
import SubmitForm from "./SubmitForm";

class MyForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allSections } = this.props;

    return (
      <form>
        {Object.values(allSections).map((section) => {
          return (
            <Section
              key={uniqid()}
              sectionHeader={section.header}
              allSections={section}
            />
          );
        })}
        <SubmitForm allData={Object.values(allSections)} />
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
