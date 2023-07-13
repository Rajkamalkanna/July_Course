import React from "react";

function BookAppointment() {
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
      <select>
        <option selected>Select your doctor</option>
        <option>Dr. John Hopkin</option>
      </select>
      <br />
      <button>Confirm Book</button>
    </>
  );
}
export default BookAppointment;
