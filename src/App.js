import { useEffect, useState } from "react";
import "./App.css";
import StdCard from "./modules/StdCards";
import Popup from "./modules/Popup.js";
import Accordian from "./modules/Accordian.js";
import Navbar from "./modules/Navbar.js";

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

      <h3 style={{ marginTop: "112px" }}>Students List</h3>

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
