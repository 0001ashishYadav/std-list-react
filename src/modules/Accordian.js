import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Style from "./Accordian.module.css";

function Accordian() {
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  function msgHandler() {
    setIsMsgOpen((preState) => !preState);
  }
  return (
    <div
      className={`${Style.accordian} ${isMsgOpen ? Style.activeAccordian : ""}`}
    >
      <div>
        <div className={Style.titleCon} onClick={msgHandler}>
          <h3>Are you want to see Magic ??</h3>
          <FaChevronDown />
        </div>
        <h5 className={`${Style.msg} ${isMsgOpen ? Style.activeMsg : ""}`}>
          It's Magic It's Magic It's Magic 🤣🤣🤣 .......
        </h5>
      </div>
    </div>
  );
}

export default Accordian;
