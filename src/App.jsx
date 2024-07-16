// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
//
//
// function App() {
//   return (
//     <>
//       <div className="w-full min-h-screen h-auto bg-[#171717]">
//         <Router>
//           <Navbar />
//           <Home />
//         </Router>
//       </div>
//     </>
//   );
// }
//
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Adjust the path as needed
import Home from "./pages/Home/Home"; // Adjust the path as needed
import Hero from "./pages/Home/Hero";
import Banner from "./pages/Home/Banner";
import BMI from "./pages/Home/BMI";
import About from "./pages/Home/About"; // Adjust the path as needed
import Services from "./pages/Home/Services"; // Adjust the path as needed
import Trainer from "./pages/Home/Trainers"; // Adjust the path as needed
import Popular from "./pages/Home/Popular"; // Adjust the path as needed
import Plan from "./pages/Home/PricingPlan"; // Adjust the path as needed
import Contact from "./pages/Home/Contact"; // Adjust the path as needed
import Footer from "./pages/Home/Footer"; // Adjust the path as needed


const App = () => {
  return (
  <div className="w-full min-h-screen h-auto bg-[#171717]">
    <Router>
          <Navbar />

          <div id="home">
            <Home />
          </div>
           <div id="hero">
             <Hero />
           </div>
           <div id="about">
            <About />
           </div>
           <div id="bmi">
                <BMI/>
            </div>
            <div id="banner">
             <Banner />
           </div>
            <div id="trainer">
                <Trainer />
            </div>
           <div id="popular">
            <Popular />
           </div>

          <div id="services">
            <Services />
          </div>
          <div id="plan">
            <Plan />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div>
            <Footer/>
          </div>
           <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
               <Route path="/checkBmi" element={<BMI />} />
               <Route path="/plan" element={<Plan />} />
            </Routes>
        </Router>
   </div>
  );
};

export default App;
