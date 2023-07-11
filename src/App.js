import "./App.css";
import Header from "./Components/NavBar.jsx";
import AddRecord from "./Components/AddRecord.jsx";
import Table from "./Components/DataTable";
import { useState } from "react";


function App() {

  const [recordsStore, setRecordsStore] = useState([
    {
      "id": 1,
      "firstname": 'Vivek',
      "lastname": 'Vardhan',
      "contact": '24'
    },
    {
      "id": 2,
      "firstname": 'Leo',
      "lastname": 'Messi',
      "contact": '10'
    },
    {
      "id": 3,
      "firstname": 'Cristiano',
      "lastname": 'Ronaldo',
      "contact": '07'
    }
  ]);

  const addRecordToStore = ({ firstname, lastname, contact }) => {
    const newRecord = {
      firstname,
      lastname,
      contact,
      id: recordsStore.length + 1,
    };
    setRecordsStore([...recordsStore, newRecord]);
  };

  const updateRecordInStore = updatedRecord => {
    return recordsStore.map((record) =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
  };

  // delete record from store

  return (
    <div>
      <Header />
      <AddRecord addRecordToStore={addRecordToStore}/>
      <Table recordsStore={recordsStore} />
    </div>
  );
}

export default App;
