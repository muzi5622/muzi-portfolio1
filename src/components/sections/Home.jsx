import { RevealOnScroll } from "../RevealOnScroll";
import { LatestArticles } from "../sections/LatestArticles";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-black"
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/60 z-0" />

        {/* Main content */}
        <RevealOnScroll>
          <div className="text-center z-10 px-4 relative max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span style={{color:'#1E90FF'}}>Muzammal</span>
            </h1>

            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              AIOps Specialist | Bug Bounty Hunter | Cybersecurity & Cloud Infrastructure Expert | AI Automation Enthusiast
            </p>

            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Specializing in secure infrastructure automation, ethical hacking, and intelligent operational solutions. Combining DevOps, SysOps, Machine Learning, and Security to build resilient systems.
            </p>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-300 py-3 px-8 rounded-lg font-semibold transition hover:bg-blue-500/10 hover:border-blue-400 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* RQF Level 6 Presentation Video */}
            <div className="mx-auto w-full max-w-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 backdrop-blur-md overflow-hidden hover:border-red-500/50 transition-all duration-300 mt-8">
              <h3 className="text-lg font-semibold text-orange-300 mb-4 text-center">
                🎬 EduQual RQF Level 6 (AIOps Diploma) Exam Presentation & Demo
              </h3>
              <p className="text-gray-400 text-sm mb-4 text-center">
                Watch my complete AIOps diploma exam presentation and live demo of CTI Platform Project from Alnafi College
              </p>
              <div className="relative w-full bg-black/50 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/rTVpRuFiXmM"
                  title="RQF Level 6 AIOps Diploma Presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
