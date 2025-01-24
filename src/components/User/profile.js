import React from "react";

const StudentForm = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Student Information Form</h2>
      <form>
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Left Column */}
          <div style={{ flex: 1 }}>
            <h3>Personal Information</h3>
            <div style={{ marginBottom: "15px" }}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Date of Birth</label>
              <input type="date" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Gender</label>
              <select style={inputStyle}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Nationality</label>
              <input type="text" placeholder="Enter nationality" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Permanent Address</label>
              <textarea placeholder="Enter address" style={inputStyle}></textarea>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter contact number" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" style={inputStyle} />
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1 }}>
            <h3>Academic Information</h3>
            <div style={{ marginBottom: "15px" }}>
              <label>Course/Program Name</label>
              <input type="text" placeholder="Enter course name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Year of Study</label>
              <input type="text" placeholder="Enter year of study" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Enrollment Number</label>
              <input type="text" placeholder="Enter enrollment number" style={inputStyle} />
            </div>

            <h3>Guardian Information</h3>
            <div style={{ marginBottom: "15px" }}>
              <label>Parent/Guardian's Name</label>
              <input type="text" placeholder="Enter guardian's name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Relationship with Student</label>
              <input type="text" placeholder="Enter relationship" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Guardian's Contact Number</label>
              <input type="tel" placeholder="Enter contact number" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Guardian's Address</label>
              <textarea placeholder="Enter address" style={inputStyle}></textarea>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ marginTop: "20px" }}>
          <h3>Hostel Preferences</h3>
          <textarea placeholder="Enter hostel preferences" style={inputStyle}></textarea>

          <h3>Documents for Verification</h3>
          <textarea placeholder="List documents (e.g., Aadhaar Card, Passport)" style={inputStyle}></textarea>

          <h3>Emergency Contact</h3>
          <input type="text" placeholder="Enter emergency contact details" style={inputStyle} />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit" style={{ padding: "10px 20px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

export default StudentForm;
