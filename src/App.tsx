import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookAppointment from "./components/BookAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/About"; // Import AboutUs page
import ContactUs from "./components/Contact"; // Import ContactUs page
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
