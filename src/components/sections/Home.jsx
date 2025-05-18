import { RevealOnScroll } from "../RevealOnScroll";
import { LatestArticles } from "../sections/LatestArticles";

export const Home = () => {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <RevealOnScroll>
          <div className="text-center z-10 px-4 relative">
            
            {/* Background image behind the name */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 pointer-events-none"
              style={{ backgroundImage: 'url("/bgimage.png")' }}
            />

            {/* Text content */}
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Muzamil
            </h1>

            <p className="relative text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a cybersecurity enthusiast passionate about ethical hacking and automation. My goal is to develop secure and efficient solutions while exploring the ever-evolving world of cybersecurity.
            </p>

            <div className="relative flex justify-center space-x-4">
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
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
