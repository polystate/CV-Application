import React, { useState } from "react";
import FormInput from "./FormInput";
import EditForm from "./EditForm";

function Section(props) {
  const { sectionHeader, allSections, inputState, inputHandler, activeInputs } =
    props;
  const defaultStyle = {
    border: "1px dashed lightgrey",
    padding: "2rem",
    color: "green",
    textDecoration: "none",
    isCompleted: false,
  };
  const [sectionState, updateSection] = useState(defaultStyle);

  const sectionHandler = (e) => {
    const inputList = Array.from(e.currentTarget.querySelectorAll("input"));
    const numInputs = inputList.filter((input) => input.value).length;
    const sectionItems = Array.from(e.currentTarget.childNodes);
    const allLIs = sectionItems.filter((elem) => elem.tagName === "LI");

    if (numInputs === allLIs.length) {
      inputList.forEach((input) => input.setAttribute("readonly", true));
      e.currentTarget.setAttribute("readonly", true);
      updateSection({
        border: "1px solid black",
        padding: "2rem",
        // color: "gold",
        // background: "purple",
        color: "green",
        textDecoration: "line-through",
        isCompleted: true,
      });
    } else updateSection(defaultStyle);
  };

  return (
    <fieldset
      className="form-sect"
      style={sectionState}
      onChange={sectionHandler}
    >
      <div className="form-header">
        <h2
          style={{
            fontFamily: "fantasy, sans-serif",
            letterSpacing: "2px",
            fontWeight: 500,
          }}
        >
          {sectionHeader}
        </h2>
      </div>
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
              activeInputs={activeInputs}
            />
          );
        })}
      {sectionState.isCompleted && (
        <EditForm
          sectionState={sectionState}
          updateSection={updateSection}
          sectionHandler={() => sectionHandler}
        />
      )}
    </fieldset>
  );
}

export default Section;
