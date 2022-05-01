import React, { Component } from "react";
import FormInput from "./FormInput";
import uniqid from "uniqid";
import SubmitForm from "./SubmitForm";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleCallback = (childData) => {
    childData.sectionName = this.props.sectionHeader;
    this.props.callback(childData);
  };

  render() {
    const { sectionHeader, allSections, callback } = this.props;
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
                callback={this.handleCallback}
              />
            );
          })}
      </section>
    );
  }
}

export default Section;
