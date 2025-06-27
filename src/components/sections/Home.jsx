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
          <div className="text-center z-10 px-4 relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Muzamil
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a cybersecurity enthusiast passionate about ethical hacking and automation. My goal is to develop secure and efficient solutions while exploring the ever-evolving world of cybersecurity.
            </p>

            <div className="flex justify-center space-x-4 mb-10">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>

            {/* TryHackMe Badge Centered without Scrollbar */}
            <div className="mx-auto w-full max-w-lg bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg backdrop-blur-md">
              <h2 className="text-xl font-semibold text-blue-400 mb-3 text-center">
                My TryHackMe Progress
              </h2>
              <div className="w-full flex justify-center items-center overflow-hidden">
                <iframe
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3516652"
                  title="TryHackMe Badge"
                  className="rounded-lg block"
                  style={{
                    border: "none",
                    width: "300px",
                    height: "120px",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
