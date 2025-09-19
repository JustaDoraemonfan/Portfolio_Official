import React, { useState, useRef, useEffect } from "react";
import CodeRain from "./Animation/CodeRain";

const ProjectShowcase = ({ projects = [] }) => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Default placeholder projects if none provided
  const defaultProjects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/ecommerce",
      liveLink: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      name: "Social Media Dashboard",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/dashboard",
      liveLink: "https://dashboard-demo.com",
    },
    {
      id: 3,
      name: "AI Chat Application",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/ai-chat",
      liveLink: "https://ai-chat-demo.com",
    },
    {
      id: 4,
      name: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/portfolio",
      liveLink: "https://portfolio-demo.com",
    },
    {
      id: 5,
      name: "Task Management App",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/tasks",
      liveLink: "https://tasks-demo.com",
    },
    {
      id: 6,
      name: "Weather Dashboard",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=600&fit=crop",
      githubLink: "https://github.com/username/weather",
      liveLink: "https://weather-demo.com",
    },
  ];

  const projectsToShow = projects.length > 0 ? projects : defaultProjects;

  // Mouse wheel horizontal scroll
  const handleWheel = (e) => {
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll horizontally with mouse wheel
      container.scrollLeft += e.deltaY * 50; // Adjust scroll speed with multiplier
    }
  };

  // Handle project click with fade animation
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setFadeOut(true);

    // Navigate after fade animation
    setTimeout(() => {
      window.open(project.liveLink, "_blank");
      // Reset fade state after navigation
      setTimeout(() => {
        setFadeOut(false);
        setSelectedProject(null);
      }, 100);
    }, 600);
  };

  // Handle GitHub link click (prevent event bubbling)
  const handleGithubClick = (e, githubLink) => {
    e.stopPropagation();
    window.open(githubLink, "_blank");
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-zinc-900 py-12">
      <CodeRain leftMin={0} leftMax={90} />
      {/* Fade overlay */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-black transition-opacity duration-600 ease-out ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main container */}
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-4xl font-bold text-amber-50">
          Things I’ve Built
        </h2>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex gap-1 overflow-x-auto"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projectsToShow.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 cursor-pointer"
              style={{ width: "280px", height: "420px" }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project card */}
              <div className="relative h-full w-full transform overflow-hidden bg-gray-900 shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Project image - full card */}
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />

                  {/* Sleek gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-all duration-300 group-hover:from-black/90 group-hover:to-black/30" />

                  {/* GitHub link */}
                  <div className="absolute top-3 right-3 translate-y-1 transform opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={(e) => handleGithubClick(e, project.githubLink)}
                      className="bg-black/60 p-2 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/80"
                      aria-label="View on GitHub"
                    >
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Project name in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="transform px-6 text-center text-3xl font-bold tracking-wide text-white drop-shadow-lg transition-all duration-300 group-hover:scale-105">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Sleek border */}
                <div className="absolute inset-0 border border-gray-800 transition-colors duration-300 group-hover:border-gray-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l4-4m0 0l4-4m-4 4v12"
              />
            </svg>
            <span>Scroll to explore</span>
            <svg
              className="h-4 w-4 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l4-4m0 0l4-4m-4 4v12"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;
