import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div id="menu">
      <div id="menu-items">
        <Link to="/news-and-events" className="menu-item">
          News and Events
        </Link>
        <Link to="/discover-3d3-and-dental-aligners" className="menu-item">
          Discover - 3D3 and Dental Aligners
        </Link>
        <Link to="/education-and-social" className="menu-item">
          Education - Social
        </Link>
        <Link to="/about-us" className="menu-item">
          About Us
        </Link>

        <h1>daa-introduction here</h1>
      </div>
      <div className="landing-page-pattern"></div>
    </div>
  );
}
