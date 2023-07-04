import "./App.css";
import Header from "./Components/NavBar.jsx";
import AddRecord from "./Components/AddRecord.jsx";
import Table from "./Components/DataTable";
import { useState } from "react";

function App() {
  const [recordsStore, setRecordsStore] = useState([]);

  // create
  const addRecordToStore = ({ firstname, lastname, phoneNumber }) => {
    const newRecord = {
      firstname,
      lastname,
      phoneNumber,
      id: recordsStore.length + 1,
    };
    return [...recordsStore, newRecord];
  };
  // update
  // const updateRecordInStore = ({id, firstname, lastname, phoneNumber}) =>
  //   recordsStore.map(record =>
  //     record.id === updatedRecord.id ?
  //       { id, firstname, lastname, phoneNumber }
  //   )

  // delete

  return (
    <div>
      <Header />
      <AddRecord />
      <Table />
    </div>
  );
}

export default App;
