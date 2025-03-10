import { useEffect, useState } from "react";
import "./App.css";
import StdCard from "./modules/StdCards";
import Popup from "./modules/Popup.js";
import Accordian from "./modules/Accordian.js";
import Navbar from "./modules/Navbar.js";
import { Route, Routes } from "react-router";

import HomePage from "./pages/Home.js";
import AboutPage from "./pages/About.js";
import ContactPage from "./pages/Contact.js";
import NotFoundPage from "./pages/NotFound.js";

function App() {
  const [stds, setstds] = useState([
    {
      name: "Ram Kumar",
      class: "BCA",
      subStream: "CS",
    },
    {
      name: "Shatrughan Kumar",
      class: "12",
      subStream: "Art",
    },
    {
      name: "Bharat Kumar",
      class: "10",
      subStream: "Mathematics",
    },
    {
      name: "Lakshman",
      class: "11",
      subStream: "Art",
    },
  ]);

  useEffect(() => {
    // console.log(stds);
  }, []);

  return (
    <>
      <Navbar />

      <section
        style={{
          marginTop: "92px",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </section>

      <h3 style={{ marginTop: "30px" }}>Students List</h3>

      <div className="stdCardCon">
        {stds.map((std, index) => (
          <StdCard stdDetails={std} key={index} />
        ))}
      </div>

      <Popup />

      <Accordian />
    </>
  );
}

export default App;
