import React from "react";

function EditForm({ sectionState, updateSection, sectionHandler }) {
  const buttonHandler = (e) => {
    let sectionElems = Array.from(e.currentTarget.parentElement.childNodes);
    let elemLIs = sectionElems.filter((section) => section.tagName === "LI");

    updateSection({
      border: "1px dashed lightgrey",
      padding: "2rem",
      color: "green",
      textDecoration: "none",
      isCompleted: false,
    });
  };

  return (
    <>
      <button onClick={buttonHandler} type="button">
        Edit
      </button>
    </>
  );
}

export default EditForm;
