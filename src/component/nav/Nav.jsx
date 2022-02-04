import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const transtionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtionNavBar);
    return () => window.removeEventListener("scroll", transtionNavBar);
  });
  const profile = () => {
    history("/profile");
  };
  const homePage = () => {
    history("/");
  };
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={homePage}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          onClick={profile}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
