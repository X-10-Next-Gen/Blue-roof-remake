import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import BookPage from "./Pages/BookPage"; // Importing the booking page
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<h1 className="text-white text-center mt-10">About Page</h1>} />
        <Route path="/services" element={<h1 className="text-white text-center mt-10">Services Page</h1>} />
        <Route path="/contact" element={<h1 className="text-white text-center mt-10">Contact Page</h1>} />
        <Route path="/book" element={<BookPage />} /> {/* New Booking Page Route */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
