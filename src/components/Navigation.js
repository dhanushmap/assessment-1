import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w3-bar w3-light-grey">
      <nav>
        <ul>
          <li>
            <Link to="/">Create Title</Link>
          </li>
          <li>
            <Link to="get-lists">Title Lists </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
