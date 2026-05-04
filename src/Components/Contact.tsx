import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 animate-slideInUp">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's collaborate and create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-6">
              Contact Information
            </h3>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out!
            </p>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email</p>
                  <p className="text-cyan-300 font-semibold">
                    dimphotshidi1@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Phone</p>
                  <p className="text-purple-300 font-semibold">
                    0646473287
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Location</p>
                  <p className="text-cyan-300 font-semibold">
                    Pretoria, Gauteng
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-4">
                Connect with me
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/DIMPHO290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all border border-cyan-500/30"
                >
                  <FaGithub className="text-white" size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dimpho-mahwibila-3b545026a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
                >
                  <FaLinkedin className="text-white" size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm animate-slideInRight">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white"
              />

              <textarea rows = {5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-purple-500/30 text-white resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition-all"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-gray-400">
            &copy; 2025 Dimpho Jessica Mahwibila. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;