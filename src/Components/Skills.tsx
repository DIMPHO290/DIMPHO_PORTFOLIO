import { Code, Lightbulb, Wrench } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Oracle SQL', 'Java', 'HTML', 'CSS', 'JavaScript',
    'React.js', 'PostgreSQL', 'Node.js', 'TypeScript'
  ];

  const professionalSkills = [
    'Time Management', 'Effective Communication', 'Team Collaboration',
    'Critical Thinking', 'Problem-Solving', 'Organizational Skills'
  ];

  const tools = [
    'Microsoft Office Suite', 'Word', 'Excel', 'PowerPoint'
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Sepedi', level: 'Native' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Skills & Languages</span>
          </h2>
          <p className="text-gray-400 text-lg">Expertise and proficiencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/80 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 backdrop-blur-sm animate-slideInLeft">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
              <Code className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/80 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 backdrop-blur-sm animate-slideInUp">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">Professional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {professionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/80 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 backdrop-blur-sm animate-slideInRight">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
              <Wrench className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-500 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm animate-scaleIn">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="group px-6 py-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30 hover:border-purple-500 hover:shadow-lg transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{lang.name}</p>
                <p className="text-cyan-300 font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
