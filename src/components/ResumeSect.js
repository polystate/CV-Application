import React, { Component } from "react";

class ResumeSect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resumeHeader, resumeContent } = this.props;
    return (
      <div className="resume-sect">
        <h2>{resumeHeader}</h2>
        <p>{resumeContent}</p>
      </div>
    );
  }
}

export default ResumeSect;
