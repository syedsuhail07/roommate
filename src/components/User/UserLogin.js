import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/UserLogin.css";


const UserLogin = () => {
  const [credentials, setCredentials] = useState({ emailOrPhone: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Simulate login process
  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy validation (replace with actual API call)
    if (
      (credentials.emailOrPhone === "user@example.com" || credentials.emailOrPhone === "1234567890") &&
      credentials.password === "password123"
    ) {
      // Clear error and navigate to homepage
      setError("");
      navigate("/"); // Redirect to homepage
    } else {
      setError("Invalid email/phone or password.");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">User Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="emailOrPhone" className="form-label">
              Email or Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="emailOrPhone"
              name="emailOrPhone"
              value={credentials.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
