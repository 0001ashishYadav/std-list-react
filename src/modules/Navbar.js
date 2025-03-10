import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Logo from "./assets/logo.png";
import "./Navbar.modules.css";
import { Link } from "react-router";

function Navbar() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  const [isDrawer, setIsDrawer] = useState(false);

  function handleDrawer() {
    setIsDrawer((preState) => !preState);
  }
  return (
    <header>
      <img src={Logo} />
      <nav>
        {/* <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a> */}

        {links.map((links, ind) => (
          <Link to={links.path} key={ind}>
            {links.name}
          </Link>
        ))}
      </nav>

      <div className="buttonCon">
        {!isDrawer ? (
          <IoMdMenu onClick={handleDrawer} />
        ) : (
          <RxCross2 onClick={handleDrawer} />
        )}
      </div>

      {/* mobile drawer */}

      <div className={`drawer ${isDrawer ? "drawerActive" : ""}`}>
        <aside>
          <RxCross2 className="drawerCloseBtn" onClick={handleDrawer} />

          <div>
            {/* <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a> */}

            {links.map((links, ind) => (
              <Link to={links.path} key={ind} onClick={handleDrawer}>
                {links.name}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;
