import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("high traffic, Please wait a moment."Experiencing , {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };
  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     // Open WhatsApp or WhatsApp Web
  //     const whatsappUrl = "https://web.whatsapp.com/";
  //     window.open(whatsappUrl, "_blank");

  //     // Display toast message
  //     toast.info("Redirecting to WhatsApp...", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };
  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     // Check if WhatsApp is installed on the device
  //     const isWhatsAppInstalled = /(android|iphone)/i.test(navigator.userAgent);

  //     if (isWhatsAppInstalled) {
  //       // If WhatsApp is installed, open the app
  //       const whatsappUrl = "whatsapp://send?phone=+91 9182095396";
  //       window.open(whatsappUrl, "_blank");
  //     } else {
  //       // If WhatsApp is not installed, open WhatsApp Web
  //       const whatsappWebUrl = "https://web.whatsapp.com/";
  //       window.open(whatsappWebUrl, "_blank");
  //     }

  //     // Display toast message
  //     toast.info("Redirecting to WhatsApp...", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };
  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      // Check if WhatsApp is installed on the device
      const isWhatsAppInstalled = /(android|iphone)/i.test(navigator.userAgent);

      if (isWhatsAppInstalled) {
        // If WhatsApp is installed, open the app and start a chat with the specified phone number
        const phoneNumber = "+919182095396"; // Replace with the desired phone number
        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
      } else {
        // If WhatsApp is not installed, open WhatsApp Web and start a chat with the specified phone number
        const phoneNumber = "+919182095396"; // Replace with the desired phone number
        const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

        // Open WhatsApp Web after a short delay
        setTimeout(() => {
          window.open(whatsappWebUrl, "_blank");
        }, 1000); // Adjust the delay time as needed
      }

      // Display toast message
      toast.info("Redirecting to WhatsApp...", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          React Health <span className="navbar-sign">🧬</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} /> Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
