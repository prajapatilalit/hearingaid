// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./Components/Pages/about";
import Service from "./Components/Pages/service";
import Pricing from "./Components/Pages/pricing";
import Team from "./Components/Pages/team";
import Appointment from "./Components/Pages/appointment";
import Testimonial from "./Components/Pages/testimonial";
import Spinner from './Components/Spinner/spinner';
import Topbar from './Components/Navbar/topbar';
import Home from './Components/Pages/home';
import Nav from "./Components/Navbar/nav";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <Router>
      <Spinner/>
      <Topbar/>
      <Nav/>
      <Home/>
      <Footer/>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/team" component={Team} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/service" component={Service} />
      </Routes>
    </Router>

  );
}

export default App;
