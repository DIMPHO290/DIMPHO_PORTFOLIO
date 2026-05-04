import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg">Current role and professional growth</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"></div>

          <div className="relative pl-24 pb-12 animate-slideInLeft">
            <div className="absolute left-4 top-2 w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>

            <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Trainee</h3>
                <span className="px-4 py-1 bg-gradient-to-r from-purple-200 to-cyan-200 text-purple-900 rounded-full text-sm font-bold">
                  Current Role
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <Briefcase size={18} className="text-purple-600" />
                <span className="font-semibold">MLAB</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mb-4">
                <Calendar size={18} className="text-cyan-600" />
                <span>2025</span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Currently gaining hands-on experience as a trainee at MLAB in Gauteng,
                developing practical skills in software development and technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
