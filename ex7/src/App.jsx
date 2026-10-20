
import { useState } from "react";
import Header from "./components/Header";
import PersonalDetails from "./components/PersonalDetails";
import AcademicDetails from "./components/AcademicDetails";
import AddressDetails from "./components/AddressDetails";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

function App() {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    dob: "",
    department: "",
    year: "",
    rollNumber: "",
    address: "",
    city: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  function handleReset() {
    setFormData({ ...initialData });
    setSubmittedData(null);
  }

  return (
    <div className="app-container">
      <div className="form-card">
        <Header />

        <form onSubmit={handleSubmit}>
          <PersonalDetails
            formData={formData}
            handleChange={handleChange}
          />

          <AcademicDetails
            formData={formData}
            handleChange={handleChange}
          />

          <AddressDetails
            formData={formData}
            handleChange={handleChange}
          />

          <div className="button-group">
            <SubmitButton />

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="success-panel">
            <h2>Registration Successful!</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Department:</strong> {submittedData.department}</p>
            <p><strong>Year:</strong> {submittedData.year}</p>
            <p><strong>Roll Number:</strong> {submittedData.rollNumber}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
