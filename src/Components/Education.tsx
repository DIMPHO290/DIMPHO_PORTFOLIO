import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Diploma in Computer Science',
      institution: 'Tshwane University of Technology',
      location: 'Pretoria, Gauteng',
      period: '2022 – 2025',
      status: 'Completed',
      color: 'cyan'
    },
    {
      degree: 'National Senior Certificate',
      institution: 'M.E Makgato Secondary School',
      location: 'Limpopo, South Africa',
      period: '2015 – 2020',
      status: 'Completed',
      color: 'purple'
    }
  ];

  return (
    <section id="education" className="py-28 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-gray-300 text-lg">
            My academic background and qualifications
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl backdrop-blur-md shadow-xl border transition transform hover:-translate-y-2
              ${
                edu.color === 'cyan'
                  ? 'bg-white/10 border-cyan-400/40 hover:border-cyan-400'
                  : 'bg-white/10 border-purple-400/40 hover:border-purple-400'
              }`}
            >

              {/* TOP */}
              <div className="flex items-start justify-between mb-6">
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center
                  ${edu.color === 'cyan'
                    ? 'bg-cyan-500'
                    : 'bg-purple-500'
                  }`}>
                  <GraduationCap className="text-white" size={22} />
                </div>

                <span className={`px-3 py-1 text-xs font-semibold rounded-full border
                  ${edu.color === 'cyan'
                    ? 'text-cyan-300 border-cyan-400/40 bg-cyan-500/10'
                    : 'text-purple-300 border-purple-400/40 bg-purple-500/10'
                  }`}>
                  {edu.status}
                </span>
              </div>

              {/* DEGREE */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {edu.degree}
              </h3>

              {/* INSTITUTION */}
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <MapPin size={16} className={edu.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
                <span>{edu.institution}</span>
              </div>

              {/* LOCATION */}
              <p className="text-sm text-gray-400 mb-3">
                {edu.location}
              </p>

              {/* PERIOD */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={16} className={edu.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} />
                <span>{edu.period}</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;