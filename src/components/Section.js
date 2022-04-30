import React, { Component } from "react";
import FormInput from "./FormInput";
import uniqid from "uniqid";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sectionHeader, allSections } = this.props;
    return (
      <section>
        <h2>{sectionHeader}</h2>
        {Object.values(allSections)
          .slice(1)
          .map((inputArr) => {
            return (
              <FormInput
                key={uniqid()}
                labelName={inputArr[0]}
                placeholder={inputArr[1]}
                inputType={inputArr[2]}
              />
            );
          })}
      </section>
    );
  }
}

export default Section;
