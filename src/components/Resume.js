import React, { Component } from "react";
import ResumeSect from "./ResumeSect";

class Resume extends Component {
  constructor(props) {
    super(props);
    // this.readData = this.readData.bind(this);
  }

  // handleCallback = (childData) => {
  //   console.log(childData);
  //   this.props.callback(childData);
  // };
  // readData = () => {
  //   console.log(this.props.data);
  // };

  render() {
    const { passdata, resumeHeader, resumeContent } = this.props;

    return (
      <div id="resume">
        <h2 id="resume-header">Resume</h2>
        <ResumeSect resumeHeader={resumeHeader} resumeContent={resumeContent} />
      </div>
    );
  }
}

export default Resume;
