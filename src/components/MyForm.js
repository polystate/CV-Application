import React, { Component, useId } from "react";
import Section from "./Section";
import SubmitForm from "./SubmitForm";

function MyForm(props) {
  const { allSections, inputState, inputHandler } = props;
  const sectionIDs = [useId(), useId(), useId()];
  return (
    <form>
      {Object.values(allSections).map((section, index) => {
        return (
          <Section
            key={sectionIDs[index]}
            sectionHeader={section.header}
            allSections={section}
            inputState={inputState}
            inputHandler={inputHandler}
          />
        );
      })}
      {/* <SubmitForm /> */}
    </form>
  );
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
