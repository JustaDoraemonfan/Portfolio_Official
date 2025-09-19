import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ linkTo, linkName, delayClass, onClick }) => {
  return (
    <Link
      to={linkTo}
      onClick={onClick}
      className={`animate-icon px-3 py-2 text-sm font-medium transition-all duration-300 relative group hover:text-orange-400 ${
        delayClass || ""
      }`}
    >
      {linkName}

      {/* Hover underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLinks;
