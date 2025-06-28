import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Spinner from './Components/Spinner/spinner';
import Topbar from './Components/Navbar/topbar';
import Home from './Components/Pages/home';
import Nav from "./Components/Navbar/nav";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <Router>
      <Spinner />
      <Topbar />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Redirect routes to Home + hash for in-page sections */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/service" element={<Navigate to="/#service" replace />} />
        <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
        <Route path="/team" element={<Navigate to="/#team" replace />} />
        <Route path="/testimonial" element={<Navigate to="/#testimonial" replace />} />
        <Route path="/appointment" element={<Navigate to="/#appointment" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
