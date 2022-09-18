import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import Training from "../routs/Training";
import Pricing from "./Pricing";
import Home from "../routs/Home";
import Contact from "../routs/Contact";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else{
      setColor(false )
    }
  };
  window.addEventListener('scroll',changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>BBC</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" element={<Home />}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/pricing" element={<Pricing />}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/training" element={<Training />}>
            Training
          </Link>
        </li>
        <li>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleclick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
