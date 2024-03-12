import React from "react";
import { Link } from "react-router-dom";

export default function NewsAndEvents() {
  return (
    <div>
      <div>NewsAndEvents</div>
      <body>
        Lastest News and Events here
        <Link to="/all-news">All News</Link>
      </body>
    </div>
  );
}
