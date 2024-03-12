import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About us Page</h1>
      <p>
        <Link to="/company">Company Info Here</Link>
      </p>
      <p>
        <Link to="/contact-us">Contact Us Here</Link>
      </p>
    </div>
  );
}
