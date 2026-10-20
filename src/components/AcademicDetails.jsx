
function AcademicDetails({ formData, handleChange }) {
  return (
    <section className="form-section">
      <h2>Academic Details</h2>

      <label>Department</label>
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option value="IT">Information Technology</option>
        <option value="CSE">Computer Science</option>
        <option value="ECE">Electronics</option>
        <option value="EEE">Electrical Engineering</option>
      </select>

      <label>Year of Study</label>
      <select
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        <option value="1">First Year</option>
        <option value="2">Second Year</option>
        <option value="3">Third Year</option>
        <option value="4">Fourth Year</option>
      </select>

      <label>Roll Number</label>
      <input
        type="text"
        name="rollNumber"
        placeholder="Enter roll number"
        value={formData.rollNumber}
        onChange={handleChange}
        required
      />
    </section>
  );
}

export default AcademicDetails;
