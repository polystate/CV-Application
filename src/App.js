import "./styles/App.css";
import MyForm from "./components/MyForm";
import Resume from "./components/Resume";
import React, { useState, useId } from "react";

function App() {
  const [inputState, updateInput] = useState({
    First: "",
    Last: "",
    Email: "",
    Phone: "",
    School: "",
    Title: "",
    Attended_From: "",
    End_Date: "",
    Company: "",
    Position: "",
    Main_Tasks: "",
    Start_Job: "",
    End_Job: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    updateInput({
      ...inputState,
      [e.target.name]: value,
    });
  };

  const allSections = {
    generalInfo: {
      header: "General Information",
      firstName: ["First", "first name", "text", useId()],
      lastName: ["Last", "last name", "text", useId()],
      eMail: ["Email", "e-mail", "text", useId()],
      phoneNumber: ["Phone", "phone", "text", useId()],
    },
    eduExperience: {
      header: "Educational Experience",
      schoolName: ["School", "school name", "text", useId()],
      titleStudy: ["Title", "title name", "text", useId()],
      dateFrom: ["Attended_From", "date from", "date", useId()],
      dateTo: ["End_Date", "date to", "date", useId()],
    },
    practExperience: {
      header: "Practical Experience",
      companyName: ["Company", "company name", "text", useId()],
      position: ["Position", "position name", "text", useId()],
      mainTasks: ["Main_Tasks", "main tasks", "text", useId()],
      dateFrom: ["Start_Job", "date from", "date", useId()],
      dateTo: ["End_Job", "date to", "date", useId()],
    },
  };

  let activeInputs = Object.entries(inputState).filter((input) => {
    return input[1] || "";
  });

  return (
    <div className="App">
      <MyForm
        allSections={allSections}
        inputState={inputState}
        inputHandler={inputHandler}
        activeInputs={activeInputs}
      />
      <Resume appState={inputState} />
    </div>
  );
}

export default App;
