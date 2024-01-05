import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  let icon;
  const [btnState, setBtnState] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClic = () => {
    setBtnState((btnState) => !btnState);
    setBtnOpen((prevBtnOpen) => !prevBtnOpen);
  };
  let toggleClass = btnState ? "open" : "";
  const changeBackground = () => {
    if (window.scrollY > 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <header>
        <div
          className={
            navbar
              ? "active navbar fixed-top w-100"
              : "navbar fixed-top w-100"
          }
        >
          <div className="logo">
            <a href="#">Personal Portfolio</a>
          </div>
          <ul className="list my-1">
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
            {btnOpen ? <CloseIcon /> : <MenuIcon />}
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
