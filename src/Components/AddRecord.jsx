import React, { useState } from "react";
import data from "../Data/Data.js";

function AddRecord() {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleAddRecordClick = () => {
    setShowAddRecord(!showAddRecord);
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleContactNumberChange = event => {
    setContactNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Do something with the form values (e.g., send them to a server)
    const newRecord = {
      id: "4",
      fName: firstName,
      lName: lastName,
      contact: contactNumber,
    };
    console.log(newRecord);
    data.records.push(newRecord);
    console.log(data.records);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Contact Number:", contactNumber);
    // Clear the form fields
    setFirstName("");
    setLastName("");
    setContactNumber("");
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
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={handleContactNumberChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default AddRecord;
