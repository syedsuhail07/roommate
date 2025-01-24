import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import UserLogin from "./components/User/UserLogin"; // Import the login page

// import BookRoom from "./components/Shared/BookRoom";
// import ChangeRoom from "./components/Shared/ChangeRoom";
// import GenerateOutPass from "./components/Shared/GenerateOutPass";
// import Complaints from "./components/Shared/Complaints";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/about" element={<AboutPage />} /> {/* About Page */}
        <Route path="/experiences" element={<ExperiencesPage />} /> {/* Experiences Page */}
        <Route path="/resources" element={<ResourcesPage />} /> {/* Resources Page */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact Page */}
        <Route path="/login" element={<UserLogin />} /> {/* User Login Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Fallback Route */}
      </Routes>
    </Router>
  );
};

export default App;
