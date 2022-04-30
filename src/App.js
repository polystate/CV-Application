import "./styles/App.css";
import MyForm from "./components/MyForm";

function App() {
  const allSections = {
    generalInfo: {
      header: "General Information",
      firstName: ["first", "first name", "text"],
      lastName: ["last", "last name", "text"],
      eMail: ["e-mail", "e-mail", "text"],
      phoneNumber: ["phone", "phone", "text"],
    },
    eduExperience: {
      header: "Educational Experience",
      schoolName: ["school", "school name", "text"],
      titleStudy: ["title", "title name", "text"],
      dateFrom: ["date from", "date from", "date"],
      dateTo: ["date to", "date to", "date"],
    },
    practExperience: {
      header: "Practical Experience",
      companyName: ["company", "company name", "text"],
      position: ["position", "position name", "text"],
      mainTasks: ["main tasks", "main tasks", "text"],
      dateFrom: ["date from", "date from", "date"],
      dateTo: ["date to", "date to", "date"],
    },
  };

  return (
    <div className="App">
      <MyForm allSections={allSections} />
    </div>
  );
}

export default App;
