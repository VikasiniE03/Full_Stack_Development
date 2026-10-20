
function AddressDetails({ formData, handleChange }) {
  return (
    <section className="form-section">
      <h2>Address Details</h2>

      <label>Address</label>
      <textarea
        name="address"
        placeholder="Enter your address"
        rows="3"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        placeholder="Enter your city"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <label>Gender</label>

      <div className="radio-group">
        {["Male", "Female", "Other"].map((gender) => (
          <label key={gender} className="radio-option">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={formData.gender === gender}
              onChange={handleChange}
              required
            />
            {gender}
          </label>
        ))}
      </div>
    </section>
  );
}

export default AddressDetails;
