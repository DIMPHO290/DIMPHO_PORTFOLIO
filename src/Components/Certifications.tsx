import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: 'ALX AI Essentials', issuer: 'ALX', year: '2024' },
    { name: 'CSS (Basic)', issuer: 'HackerRank', year: '2024' },
    { name: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM', year: '2024' },
    { name: 'Frontend Developer (React)', issuer: 'HackerRank', year: '2025' },
    { name: 'JavaScript (Basic)', issuer: 'HackerRank', year: '2025' },
    { name: 'Basic of Network Layer Protocols Micro Certification', issuer: 'Huawei', year: '2025' },
    { name: 'HCIA-Cloud Service V3.5 Course', issuer: 'Huawei', year: '2025' },
    { name: 'Tshwane Varsity Hackathon', issuer: 'TUT', year: '2025' },
    { name: 'Certificate of Achievement', issuer: 'Vibe Africa', year: '2025' }
  ];

  const achievements = [
    {
      title: 'Final Year Computer Science Student',
      description: 'Currently completing final year of Diploma in Computer Science at Tshwane University of Technology',
      type: 'Academic achievement',
      year: '2024'
    },
    {
      title: 'ALX AI Essentials Certificate',
      description: 'Completed ALX AI Essentials course',
      type: 'Professional development',
      year: '2024'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">Professional credentials and accomplishments</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-6 flex items-center gap-2">
            <Award className="text-cyan-400" size={28} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/80 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 backdrop-blur-sm animate-slideInUp"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold border border-cyan-500/30">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6 flex items-center gap-2">
            <Award className="text-purple-400" size={28} />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/80 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 backdrop-blur-sm ${
                  index === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{achievement.title}</h4>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold border border-purple-500/30">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-300 mb-3 leading-relaxed">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-bold border border-pink-500/30">
                  {achievement.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
