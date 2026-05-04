import { Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 text-lg">
            A snapshot of my strengths and what I bring to a development team
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* CARD 1 */}
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-purple-400/40 hover:border-purple-400 transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Goal-Oriented Execution
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I approach development with clear objectives, focusing on delivering reliable, high-quality solutions within set timelines.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-cyan-400/40 hover:border-cyan-400 transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Practical Problem Solving
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Skilled at analysing challenges and implementing efficient, scalable solutions using modern development tools and frameworks.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-pink-400/40 hover:border-pink-400 transition transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Continuous Improvement
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to refining my skills, learning new technologies, and applying best practices to build better software.
            </p>
          </div>

        </div>

        {/* MAIN TEXT */}
        <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-xl border border-cyan-400/30 max-w-4xl mx-auto">
          
          <p className="text-gray-200 leading-relaxed text-lg">
            I am a Computer Science graduate from{" "}
            <span className="font-semibold text-cyan-300">
              Tshwane University of Technology
            </span>
            , with a solid foundation in software development and modern web technologies.
            I have built responsive and user-focused applications using React, JavaScript, and backend tools, with a strong emphasis on performance and usability.
          </p>

          <p className="text-gray-200 leading-relaxed text-lg mt-4">
            My focus is on writing clean, maintainable code and contributing to solutions that solve real-world problems.
            I work well in collaborative environments and continuously push myself to grow into a well-rounded and impactful software developer.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;