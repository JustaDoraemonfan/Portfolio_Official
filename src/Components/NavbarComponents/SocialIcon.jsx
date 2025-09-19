import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({
  ariaLabel,
  delayClass,
  iconName,
  iconURL,
  linkTo = "#", // Default link if none provided
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Platform-specific colors
  const getIconColor = (name) => {
    switch (name.toLowerCase()) {
      case "twitter":
        return "#1DA1F2";
      case "github":
        return "#333333";
      case "linkedin":
        return "#0A66C2";
      case "instagram":
        return "#E4405F";
      default:
        return "#000000";
    }
  };

  return (
    <div
      className={`relative ${delayClass}`}
      style={{
        width: isHovered ? "90px" : "24px",
        transition: "width 300ms ease",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={linkTo}
        aria-label={ariaLabel}
        className="flex items-center h-6"
      >
        {/* Original Icon - fades out on hover */}
        <div
          className="absolute left-0 top-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          <img src={iconURL} alt={iconName} className="h-6 w-6" />
        </div>

        {/* Text - fades in on hover */}
        <div
          className="absolute left-0 font-medium transition-opacity duration-300 whitespace-nowrap"
          style={{
            opacity: isHovered ? 1 : 0,
            color: getIconColor(iconName),
          }}
        >
          {iconName}
        </div>
      </Link>
    </div>
  );
};

export default SocialIcon;
