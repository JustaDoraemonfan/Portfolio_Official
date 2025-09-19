import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import CodeRain from "./Animation/CodeRain";

const AboutMe = () => {
  return (
    <section id="about" className="relative bg-zinc-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CodeRain leftMax={95} leftMin={5} />
        {/* Decorative elements */}
        <div className="absolute -left-6 top-24 h-24 w-1 bg-amber-100 opacity-60 md:h-40" />
        <motion.div
          className="absolute -right-2 bottom-0 h-16 w-16 opacity-5 md:h-24 md:w-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <Code className="h-full w-full text-amber-100" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-center"
          >
            <span className="inline-block rounded-full bg-zinc-800 px-4 py-1 text-sm text-amber-100">
              Hello, I'm <span className="font-medium">Souvik</span>
            </span>
          </motion.div>

          <h2 className="mb-8 text-center text-2xl font-medium tracking-tight text-white md:text-3xl">
            About{" "}
            <span className="bg-amber-100 bg-clip-text font-medium text-transparent">
              Me
            </span>
          </h2>

          <p className="mb-8 text-gray-300">
            <span className="block border-l-2 border-amber-100 pl-4 italic text-white">
              "Architecting seamless web experiences — front to back, pixel to
              logic."
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-lg border border-zinc-800 bg-black bg-opacity-40 p-6 backdrop-blur-sm shadow-lg"
          >
            <p className="mb-4 text-gray-300">
              First-year B.Tech student translating ideas into elegantly
              functional web solutions. Working with React, Node, and Express to
              build experiences that solve real-world problems with purpose and
              precision.
            </p>

            <p className="mb-4 text-gray-300">
              I find beauty in the intersection of clean code and intuitive
              design—creating digital spaces where complexity fades into the
              background. My development philosophy draws from the same elegant
              simplicity found in physics equations.
            </p>

            <p className="text-gray-300">
              Beyond the command line, I explore theoretical physics concepts
              and navigate virtual worlds with friends—each experience reshaping
              how I approach the architecture of digital experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
