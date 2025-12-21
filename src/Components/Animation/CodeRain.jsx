import { useEffect, useState } from "react";

const fakeCodeSnippets = [
  "const user = getCurrentUser();",
  "if (!user) throw new Error('Auth');",
  "await fetch('/api/data');",
  "return <HeroSection />;",
  "const [state, setState] = useState();",
  "function deployAIModel() {}",
  "useEffect(() => {}, []);",
  "// TODO: optimize performance",
  "console.log('Portfolio Loaded');",
  "<div className='hero' />;",
  "import React from 'react';",
  "export default Component;",
  "const api = axios.create({});",
  "try { await response.json(); }",
  "catch (error) { console.log(error); }",
  "const handleClick = () => {};",
  "npm install dependencies",
  "git commit -m 'feat: new feature'",
  "docker build -t myapp .",
  "kubectl apply -f deployment.yaml",
];

const getRandomSnippet = () =>
  fakeCodeSnippets[Math.floor(Math.random() * fakeCodeSnippets.length)];

const CodeRain = ({ leftMin = 60, leftMax = 95 }) => {
  const [lines, setLines] = useState([]);

  const getRandomStyles = () => {
    const top = `${Math.floor(Math.random() * 90)}%`;
    const left = `${
      leftMin + Math.floor(Math.random() * (leftMax - leftMin))
    }%`;
    const rotate = `${Math.floor(Math.random() * 10 - 5)}deg`;
    const blur = Math.random() > 0.7 ? "blur-sm" : "";
    const opacity = Math.random() * 0.6 + 0.4; // Random opacity between 0.4 and 1
    const duration = Math.random() * 3 + 2; // Random duration between 2-5s

    return { top, left, rotate, blur, opacity, duration };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const style = getRandomStyles();
      setLines((prev) => [
        ...prev.slice(-12), // keep a few more for smoothness
        {
          id: Date.now() + Math.random(), // Ensure unique IDs
          text: getRandomSnippet(),
          style,
        },
      ]);
    }, 800); // slightly slower spawn

    return () => interval;
  }, [leftMin, leftMax]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <p
          key={line.id}
          className={`absolute font-mono text-sm text-secondary ${line.style.blur} animate-fadeFloat`}
          style={{
            top: line.style.top,
            left: line.style.left,
            transform: `rotate(${line.style.rotate})`,
            whiteSpace: "nowrap",
            opacity: line.style.opacity,
            animationDuration: `${line.style.duration}s`,
          }}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};

export default CodeRain;
