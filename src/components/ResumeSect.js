import React from "react";

function ResumeSect(props) {
  const { header, content } = props;
  return (
    <div className="resume-section">
      <h2 className="resume-subheader">{header}</h2>
      <p className="user-input">{content}</p>
    </div>
  );
}

export default ResumeSect;
