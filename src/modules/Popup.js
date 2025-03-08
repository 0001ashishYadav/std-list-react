import React, { useState } from "react";
import "./Popup.modules.css";

function Popup() {
  const [isPopup, setIsPopup] = useState(false);

  function popupHandler() {
    setIsPopup((preState) => !preState);
  }
  return (
    <div>
      <h2>Want to see Popup model ?</h2>
      <button onClick={popupHandler}>Open Popup</button>
      <div className={`popupMaincon ${isPopup ? "activePopup" : ""}`}>
        <div>
          <h1>Hii Bro</h1>
          <button onClick={popupHandler}>Cancel</button>
          <button>Let's Learn</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
