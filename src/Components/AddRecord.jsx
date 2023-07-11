import React, { useState } from "react";
import data from "../Data/Data.js";

function AddRecord({ addRecordToStore }) {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");

  const handleAddRecordClick = () => {
    setShowAddRecord(!showAddRecord);
  };

  const handleFirstNameChange = event => {
    setFirstname(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastname(event.target.value);
  };

  const handleContactNumberChange = event => {
    setContact(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Do something with the form values (e.g., send them to a server)
    const newRecord = {
      id: "4",
      firstname: firstname,
      lastname: lastname,
      contact: contact,
    };
    console.log(newRecord);
    data.records.push(newRecord);
    console.log(data.records);
    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Contact Number:", contact);
    // Clear the form fields
    setFirstname("");
    setLastname("");
    setContact("");
    // Hide the form
    setShowAddRecord(false);
  };

  return (
    <div>
      <button onClick={handleAddRecordClick}>
        {showAddRecord ? "Cancel" : "Add Record"}
      </button>
      {showAddRecord && (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstname}
              onChange={handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Contact Number:
            <input
              type="text"
              value={contact}
              onChange={handleContactNumberChange}
            />
          </label>
          <br />
          <button
           type="submit"
           onClick={() => addRecordToStore({ firstname, lastname, contact })}
           >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddRecord;
