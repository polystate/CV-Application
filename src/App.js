import "./styles/App.css";
import MyForm from "./components/MyForm";
import Resume from "./components/Resume";
import React, { Component, useId } from "react";

function App() {
  const [state, setState] = React.useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    datefrom: "",
    dateto: "",
    company: "",
    position: "",
    maintasks: "",
    datefrom2: "",
    dateto2: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const allSections = {
    generalInfo: {
      header: "General Information",
      firstName: ["first", "first name", "text", useId()],
      lastName: ["last", "last name", "text", useId()],
      eMail: ["email", "e-mail", "text", useId()],
      phoneNumber: ["phone", "phone", "text", useId()],
    },
    eduExperience: {
      header: "Educational Experience",
      schoolName: ["school", "school name", "text", useId()],
      titleStudy: ["title", "title name", "text", useId()],
      dateFrom: ["datefrom", "date from", "date", useId()],
      dateTo: ["dateto", "date to", "date", useId()],
    },
    practExperience: {
      header: "Practical Experience",
      companyName: ["company", "company name", "text", useId()],
      position: ["position", "position name", "text", useId()],
      mainTasks: ["maintasks", "main tasks", "text", useId()],
      dateFrom: ["datefrom2", "date from", "date", useId()],
      dateTo: ["dateto2", "date to", "date", useId()],
    },
  };

  return (
    <div className="App">
      <MyForm
        allSections={allSections}
        inputState={state}
        inputHandler={inputHandler}
      />
      <Resume />
    </div>
  );
}

export default App;
