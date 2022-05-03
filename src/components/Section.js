import React, { useState } from "react";
import FormInput from "./FormInput";

function Section(props) {
  const { sectionHeader, allSections, inputState, inputHandler, activeInputs } =
    props;
  const [sectionState, updateSection] = useState({
    General_Information: false,
    Educational_Experience: false,
    Practical_Experience: false,
  });

  // const isSectionComplete = () => {
  //   console.log(activeInputs);
  //   console.log(allSections);
  // };

  const defaultStyle = {
    border: "1px dashed lightgrey",
    padding: "2rem",
    color: "green",
  };

  return (
    <section className="form-sect" style={defaultStyle}>
      <h2
        style={{
          fontFamily: "fantasy, sans-serif",
          letterSpacing: "2px",
          fontWeight: 500,
        }}
      >
        {sectionHeader}
      </h2>
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
    </section>
  );
}

export default Section;
