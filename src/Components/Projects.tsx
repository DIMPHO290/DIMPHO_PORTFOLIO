import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode
} from "react-icons/fa";

import { Cloud, Layers } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcase of my work and expertise
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJECT 1 */}
          <div className="p-8 rounded-xl bg-cyan-900/20 border border-cyan-500/30">
            <div className="flex justify-between mb-6">
              <Cloud className="text-white" size={28} />
              <FaExternalLinkAlt className="text-cyan-400" />
            </div>

            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              Weather Application
            </h3>

            <p className="text-gray-300 mb-6">
              Real-time weather app using API integration and location data.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/DIMPHO290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg"
              >
                <FaGithub />
                View Code
              </a>

              <a
                href="https://github.com/DIMPHO290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                <FaExternalLinkAlt />
                View Project
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="p-8 rounded-xl bg-purple-900/20 border border-purple-500/30">
            <div className="flex justify-between mb-6">
              <FaCode className="text-white text-2xl" />
              <FaExternalLinkAlt className="text-purple-400" />
            </div>

            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              Portfolio Website
            </h3>

            <p className="text-gray-300 mb-6">
              Responsive portfolio built with React and Tailwind CSS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/DIMPHO290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                <FaGithub />
                View Code
              </a>

              <a
                href="https://github.com/DIMPHO290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg"
              >
                <FaExternalLinkAlt />
                View Project
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-400">
          More projects coming soon...
        </div>

      </div>
    </section>
  );
};

export default Projects;