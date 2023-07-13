import React, { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isAppointment, setAppointment] = useState(false);

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const handleWhereChange = (event) => {
    setWhere(event.target.value);
  };

  const handleWhenChange = (event) => {
    setWhen(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Make the API call with form data
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          firstName,
          lastName,
          email,
          doctor,
          where,
          when,
        }
      );

      setLoading(false);
      setAppointment(true);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleCancel = () => {
    setAppointment(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setDoctor("");
    setWhere("");
    setWhen("");
  };
  return (
    <div>
      {isAppointment ? (
        <div>
          <h1>Appointment Booked Successfully</h1>
          <button onClick={handleCancel}>Cancel appointment</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Book a session</h1>
          <p>Fill in the form below a book virtual session with your doctor</p>
          <h4>Basic Info</h4>
          <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <h3>Doctor</h3>
          <select value={doctor} onChange={handleDoctorChange}>
            <option value="">Select your doctor</option>
            <option value="Dr. Deepa">Dr. Deepa</option>
            <option value="Dr. John Hopkin">Dr. John Hopkin</option>
          </select>
          {doctor && (
            <>
              <h3>Where?</h3>
              <div>
                <input
                  type="radio"
                  id="google-meet"
                  name="where"
                  value="Google Meet"
                  checked={where === "Google Meet"}
                  onChange={handleWhereChange}
                />
                <label htmlFor="google-meet">Google Meet</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="phone"
                  name="where"
                  value="Phone"
                  checked={where === "Phone"}
                  onChange={handleWhereChange}
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <h3>When?</h3>
              <input
                type="datetime-local"
                value={when}
                onChange={handleWhenChange}
              />
              <br />
              {isLoading ? (
                <>
                  <h1>Book a session</h1>
                  <p>
                    Fill in the form below to book a virtual session with your
                    doctor
                  </p>
                  <h3>Scheduling the appointment...</h3>
                </>
              ) : (
                <button type="submit">Submit</button>
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
}
export default BookAppointment;
