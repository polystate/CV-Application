import React, { useState } from "react";
import ResumeSect from "./ResumeSect";

function Resume(props) {
  const { appState } = props;
  return (
    <div id="resume">
      <h2 id="resume-title">My Resume</h2>
      {Object.entries(appState).map((inputArr, index) => {
        if (inputArr[1]) {
          return (
            <ResumeSect
              key={inputArr[0] + index}
              header={inputArr[0].replaceAll("_", " ")}
              content={inputArr[1]}
            />
          );
        }
      })}
    </div>
  );
}

export default Resume;
