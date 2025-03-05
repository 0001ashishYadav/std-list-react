import { useEffect, useState } from "react";
import "./App.css";
import StdCard from "./modules/StdCards";

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
      <h3>Students List</h3>
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
        {stds.map((std, index) => (
          <StdCard stdDetails={std} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
