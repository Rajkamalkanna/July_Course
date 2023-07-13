import React, { useState } from "react";

function BookAppointment() {
  const [selectDoc, setSelectDoc] = useState("Select your doctor");

  const handleChange = (event) => {
    setSelectDoc(event.target.value);
  };
  return (
    <>
      <h1>Book a session</h1>
      <p>Fill in the form below a book virtual session with your doctor</p>
      <h4>Basic Info</h4>
      <br />
      <label>
        First Name<input type="text"></input>
      </label>
      <br />
      <label>
        Last Name
        <input type="text" />
      </label>
      <br />
      <label>
        Email
        <input type="text" />
      </label>
      <h4>Doctor</h4>
      <select value={selectDoc} onChange={handleChange}>
        <option>Select your doctor</option>
        <option>Dr. John Hopkin</option>
      </select>
      <br />
      {selectDoc == "Dr. John Hopkin" && (
        <div>
          <h4>Where?</h4>
          <div>
            <input type="radio" id="google-meet" name="action" />
            <label for="google-meet">Google Meet</label>
          </div>
          <div>
            <input type="radio" id="phone" name="action" />
            <label for="phone">Phone</label>
          </div>
          <h4>When?</h4>
          <div>
            <input type="datetime-local" id="date-details" name="date" />
          </div>
        </div>
      )}
      <button>Confirm Book</button>
    </>
  );
}
export default BookAppointment;
