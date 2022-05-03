import React, { useId } from "react";
import Section from "./Section";
import SubmitForm from "./SubmitForm";
import EditForm from "./EditForm";

function MyForm(props) {
  const { allSections, inputState, inputHandler, activeInputs } = props;
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
            activeInputs={activeInputs}
          />
        );
      })}
      <SubmitForm />
      <EditForm />
    </form>
  );
}

export default MyForm;
