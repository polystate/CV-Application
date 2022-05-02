import React, { Component } from "react";
import FormInput from "./FormInput";
import uniqid from "uniqid";
import SubmitForm from "./SubmitForm";

function Section(props) {
  const { sectionHeader, allSections, inputState, inputHandler } = props;
  return (
    <section>
      <h2>{sectionHeader}</h2>
      {Object.values(allSections)
        .slice(1)
        .map((inputArr) => {
          return (
            <FormInput
              key={inputArr[3]}
              labelName={inputArr[0]}
              placeholder={inputArr[1]}
              inputType={inputArr[2]}
              inputHandler={inputHandler}
              inputState={inputState[inputArr[0]]}
            />
          );
        })}
    </section>
  );
}

export default Section;
