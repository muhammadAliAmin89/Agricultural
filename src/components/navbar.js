import { useState } from "react";

export default function Navbar() {
  let icon;
  const [btnState, setBtnState] = useState(false);
  const handleClic = () => {
    setBtnState((btnState) => !btnState);
  };
  let toggleClass = btnState ? "open" : "";
  // if (toggleClass) {
  //   icon = "fa-solid fa-xmark";
  // } else {
  //   icon = "fa-solid fa-bars";
  // }
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">Personal Portfolio</a>
          </div>
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
          <a href="#" className="action_btn">
            Contact us
          </a>
          <div className="toggle_btn" onClick={handleClic}>
            <i class={`${icon}`}></i>
          </div>
        </div>
        <div className={`menu_dropdown ${toggleClass}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <a href="#" className="action_btn_2">
            get started
          </a>
        </div>
      </header>
    </div>
  );
}
