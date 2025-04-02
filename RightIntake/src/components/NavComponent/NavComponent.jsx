import React from "react";
import { useNavigate } from "react-router";
import "./NavComponent.css";

const NavComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-component-container">
      <div className="nav-component-wrapper" onClick={() => navigate("/")}>
        <div className="brand-logo-wrapper">
          <img src="/images/RightintakeLogo_website.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default NavComponent;
