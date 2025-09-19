import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SocialIcon from "./NavbarComponents/SocialIcon";
import NavLinks from "./NavbarComponents/NavLinks";
import {
  TwitterLogo,
  LinkedInLogo,
  GitHubLogo,
  InstagramLogo,
} from "../assets/SocialIcons/Social";
import { MenuIcon, CloseIcon } from "../assets/HamburgerUI/hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the Hamburger Menu
  const [scrolled, setScrolled] = useState(false); // Track scroll position

  // Add scroll event listener to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 w-full px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-amber-50 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Name instead of Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center">
              <h1
                className={`text-1xl tracking-tight transition-colors duration-300 md:text-2xl ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <span
                  className={`animate-icon animate-icon-delay-1 bg-clip-text font-medium text-transparent ${
                    scrolled ? "bg-orange-500" : "bg-amber-100"
                  }`}
                >
                  Souvik
                </span>{" "}
                <span
                  className={`animate-icon animate-icon-delay-2 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Patra
                </span>
              </h1>
            </Link>
          </div>
          {/* Name Ending */}
          {/* Desktop Navigation */}
          <nav
            className={`hidden items-center space-x-8 md:flex ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <NavLinks
              linkTo="/about"
              linkName="About"
              delayClass="animate-icon-delay-1"
            />
            <NavLinks
              linkTo="/projects"
              linkName="Projects"
              delayClass="animate-icon-delay-2"
            />
            <NavLinks
              linkTo="/skills"
              linkName="Skills"
              delayClass="animate-icon-delay-3"
            />
            <NavLinks
              linkTo="/contact"
              linkName="Contact"
              delayClass="animate-icon-delay-4"
            />
          </nav>
          {/* Desktop Navigation Ending */}
          {/* Social Icons */}
          <div className={`hidden items-center space-x-6 md:flex`}>
            {/* Twitter */}
            <SocialIcon
              ariaLabel="Twitter"
              delayClass="animate-icon-delay-4"
              iconName="Twitter"
              iconURL={TwitterLogo}
              linkTo="https://twitter.com/yourusername"
            />
            {/* GitHub */}
            <SocialIcon
              ariaLabel="Github"
              delayClass="animate-icon-delay-5"
              iconName="Github"
              iconURL={GitHubLogo}
              linkTo="https://github.com/yourusername"
            />
            {/* LinkedIn */}
            <SocialIcon
              ariaLabel="LinkedIn"
              delayClass="animate-icon-delay-6"
              iconName="LinkedIn"
              iconURL={LinkedInLogo}
              linkTo="https://linkedin.com/in/yourusername"
            />
            {/* Instagram */}
            <SocialIcon
              ariaLabel="Instagram"
              delayClass="animate-icon-delay-7"
              iconName="Instagram"
              iconURL={InstagramLogo}
              linkTo="https://instagram.com/yourusername"
            />
          </div>
          {/* Social Icons Ending */}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`focus:outline-none ${
                scrolled ? "" : "invert filter"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? CloseIcon : MenuIcon}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="h-6 w-6 transition-opacity duration-300 hover:opacity-70"
              />
            </button>
          </div>
          {/* Mobile menu button Ending*/}
          {/* Mobile Menu */}
          {isOpen && (
            <div className="bg-opacity-95 absolute top-16 right-0 left-0 bg-zinc-900 px-4 py-2 shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 py-4 text-white">
                {/* Navbar Links */}
                <NavLinks
                  linkTo="/about"
                  linkName="About"
                  delayClass="animate-icon-delay-1"
                  onClick={() => setIsOpen(false)}
                />
                <NavLinks
                  linkTo="/projects"
                  linkName="Projects"
                  delayClass="animate-icon-delay-2"
                  onClick={() => setIsOpen(false)}
                />
                <NavLinks
                  linkTo="/skills"
                  linkName="Skills"
                  delayClass="animate-icon-delay-3"
                  onClick={() => setIsOpen(false)}
                />
                <NavLinks
                  linkTo="/contact"
                  linkName="Contact"
                  delayClass="animate-icon-delay-4"
                  onClick={() => setIsOpen(false)}
                />
                {/* Navbar Links Ending*/}

                <div className="flex space-x-4 pt-4">
                  {/* Twitter */}
                  <SocialIcon
                    ariaLabel="Twitter"
                    delayClass="animate-icon-delay-4"
                    iconName="Twitter"
                    iconURL={TwitterLogo}
                    linkTo="https://twitter.com/yourusername"
                  />
                  {/* GitHub */}
                  <SocialIcon
                    ariaLabel="Github"
                    delayClass="animate-icon-delay-5"
                    iconName="Github"
                    iconURL={GitHubLogo}
                    linkTo="https://github.com/yourusername"
                  />
                  {/* LinkedIn */}
                  <SocialIcon
                    ariaLabel="LinkedIn"
                    delayClass="animate-icon-delay-6"
                    iconName="LinkedIn"
                    iconURL={LinkedInLogo}
                    linkTo="https://linkedin.com/in/yourusername"
                  />
                  {/* Instagram */}
                  <SocialIcon
                    ariaLabel="Instagram"
                    delayClass="animate-icon-delay-7"
                    iconName="Instagram"
                    iconURL={InstagramLogo}
                    linkTo="https://instagram.com/yourusername"
                  />
                </div>
              </div>
            </div>
          )}
          {/* Mobile Menu Ending*/}
        </div>
      </header>
    </>
  );
};

export default Navbar;
