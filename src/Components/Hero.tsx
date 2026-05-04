import { Mail, Phone, MapPin } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import photo from "../assets/photo.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-28 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">

      <div className="max-w-7xl w-full mx-auto">
        {/* Better spacing & alignment */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-20 md:gap-28">

          {/* LEFT - IMAGE */}
          <div className="flex-shrink-0 relative">
            <img
              src={photo}
              alt="Dimpho Jessica Mahwibila"
              className="w-80 h-80 md:w-[440px] md:h-[440px] rounded-full object-cover border-8 border-white shadow-2xl"
            />

            {/* Open to work badge */}
            <div className="absolute bottom-6 right-6 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">
              Open to Work
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex-1 text-center md:text-left max-w-xl">

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Dimpho Jessica
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                Mahwibila
              </span>
            </h1>

            {/* TYPEWRITER */}
            <p className="text-xl md:text-2xl text-cyan-300 font-semibold mb-6">
              <Typewriter
                words={[
                  "Computer Science Graduate",
                  "Frontend Developer",
                  "React & JavaScript Developer",
                  "Aspiring Software Engineer"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>

            {/* 🔥 STRONGER PROFESSIONAL TEXT */}
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Computer Science graduate with hands-on experience building scalable and responsive web applications.
              Proficient in React, JavaScript, and modern backend technologies, with a strong focus on clean code,
              performance, and user experience. Eager to contribute to impactful projects and grow within a dynamic development team.
            </p>

            {/* SKILLS (cleaner + more structured) */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              {[
                "React", "JavaScript", "TypeScript",
                "Node.js", "PostgreSQL",
                "Java", 
                "HTML", "CSS", "React Native"
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 justify-center md:justify-start mb-10">
              <a
                href="mailto:dimphotshidi1@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md"
              >
                <Mail size={18} /> Contact
              </a>

              <a
                href="https://github.com/DIMPHO290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition shadow-md"
              >
                <FaGithub size={18} /> GitHub 
              </a>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Pretoria, Gauteng
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> 064 647 3287
              </div>
              <a
                href="https://www.linkedin.com/in/dimpho-mahwibila-3b545026a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
              <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;