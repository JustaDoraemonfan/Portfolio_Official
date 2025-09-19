import React, { useState, useEffect } from "react";
import CodeRain from "./Animation/CodeRain";
/**
 * HeroSection Component with Card-Like Design
 **/

const HeroSection = () => {
  // State for tracking background image loading status
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload the background image (using a placeholder since we don't have the actual image)
  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-8">
      {/* 
            ------------------------------------------------
            BACKGROUND ELEMENTS - Gradient Background
            ------------------------------------------------
            */}
      <div className="absolute inset-0 z-0 bg-zinc-900 bg-gradient-to-r" />

      {/* 
            ------------------------------------------------
            CARD CONTAINER - Black Card with Rounded Corners
            ------------------------------------------------
            */}
      <div className="card-animation relative z-10 mx-auto h-auto w-full overflow-hidden rounded-2xl bg-black bg-opacity-90 shadow-2xl md:h-5/6 md:w-11/12">
        {/* Card inner content */}
        <div className="relative h-full w-full p-6 md:p-12">
          {/* Background image with subtle animation on load */}
          {!imageError && (
            <div
              className={`absolute inset-0 z-0 background-fade ${
                imageLoaded ? "image-loaded" : ""
              }`}
            >
              <div className="hero-bg h-full w-full"></div>
            </div>
          )}

          {/* 
                    ------------------------------------------------
                    MAIN CONTENT CONTAINER
                    ------------------------------------------------
                    */}
          <div className="relative z-20 flex h-full flex-col justify-center">
            <CodeRain leftMax={95} leftMin={5} />
            <div className="container mx-auto">
              <div className="flex flex-col items-center gap-x-4 gap-y-8 md:grid md:grid-cols-5 md:items-start">
                {/* 
                                ------------------------------------------------
                                HERO TEXT CONTENT
                                ------------------------------------------------
                                */}
                <div className="fade-in-up w-full px-4 text-center md:col-span-3 md:text-left">
                  {/* Main heading with gradient text effect */}
                  <h1 className="mb-4 text-3xl leading-tight tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
                    <span className="text-1xl relative block sm:text-2xl md:text-3xl">
                      <span className="text-gradient-primary relative bg-clip-text font-medium">
                        From Pixels to Packets —
                      </span>
                    </span>
                    <span className="relative mt-2 block text-4xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                      <span className="text-stroke-1">
                        Where design meets logic — building full-stack solutions
                        that feel effortless.
                      </span>
                    </span>
                  </h1>

                  {/* Tagline with gradient text accent */}
                  <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed font-normal tracking-wide text-white italic sm:mb-8 sm:max-w-md sm:text-base md:mx-0 md:text-xl">
                    "Turning ideas into intuitive digital interfaces —
                    <span className="relative inline-block">
                      <span className="text-gradient-rose relative">
                        one line of code at a time"
                      </span>
                    </span>
                  </p>

                  {/* 
                                    ------------------------------------------------
                                    SOCIAL PROOF SECTION
                                    ------------------------------------------------
                                    */}
                  <div className="social-proof-animation mx-auto mb-8 max-w-md rounded-lg border border-gray-800 bg-gray-900 bg-opacity-50 p-4 backdrop-blur-sm backdrop-blur-fallback md:mx-0">
                    <div className="flex items-center">
                      {/* Testimonial avatar */}
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 font-medium text-black">
                          A
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <div className="ml-4">
                        <p className="text-sm text-gray-300">
                          "Working with this developer transformed our vision
                          into a stunning reality that exceeded all
                          expectations."
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          — Alex Chen, CEO at TechVision
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 
                                    ------------------------------------------------
                                    CALL TO ACTION BUTTON
                                    ------------------------------------------------
                                    */}
                  <div className="button-animation mt-4 w-full sm:w-auto md:mt-0">
                    <a
                      href="#projects"
                      className="inline-block transform rounded-md bg-amber-100 px-6 py-3 text-sm font-medium text-black shadow-lg transition-all duration-300 hover-scale hover:bg-gray-300 md:text-base"
                      aria-label="View my projects"
                    >
                      View My Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
            ------------------------------------------------
            SCROLL INDICATOR (MOBILE ONLY)
            ------------------------------------------------
            */}
      {/* Scroll Indicator for Mobile */}
      <div className="scroll-indicator absolute bottom-6 left-1/2 z-20 -translate-x-1/2 transform md:hidden">
        <div className="flex flex-col items-center scroll-bounce">
          <span className="mb-1 text-sm text-gray-300">Scroll Down</span>
          <svg
            className="h-5 w-5 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
