import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const repositories = [
    { name: "🎯 CTI Platform (RQF Level 6 - Exam Project)", language: "Full-Stack", description: "Advanced Cyber Threat Intelligence Platform with real-time threat analysis, incident response automation, and intelligence gathering capabilities.", url: "https://github.com/muzi5622/CTI_Platform", featured: true },
    { name: "🐝 Honeypot Threat Intelligence Report", language: "AWS", description: "Deployed a Heralding honeypot on AWS to capture and analyze threat intelligence.", url: "https://github.com/muzi5622" },
    { name: "🗣️ Text To Speech", language: "Python", description: "Convert text into natural-sounding voice using Windows TTS.", url: "https://github.com/muzi5622/Text-To-Speech-Using-Windows" },
    { name: "🔄 ARP Spoofing Tool", language: "Python", description: "Perform MITM attacks in a test environment for learning purposes.", url: "https://github.com/muzi5622/arp-spoofing" },
    { name: "📦 Packet Sniffer", language: "Python", description: "Monitor and capture packets with Scapy for network analysis.", url: "https://github.com/muzi5622/packet_sniffer_with_scapy" },
    { name: "📋 Wi-Fi Device Logger", language: "Python", description: "Python-based tool to log and track devices on your network.", url: "https://github.com/muzi5622/wifi-scanner" },
    { name: "🔐 Mac Address Changer", language: "Python", description: "A script to change MAC addresses for network testing and anonymity.", url: "https://github.com/muzi5622/Mac-Address-Changer" },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-cover bg-center relative">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of security and automation projects developed for real-world applications and continuous learning in cybersecurity and DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repositories.map((repo, key) => (
              <a
                key={key}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl border transition-all duration-300 group backdrop-blur-sm ${
                  repo.featured
                    ? 'md:col-span-2 lg:col-span-3 border-orange-500/50 bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:border-orange-500 hover:shadow-[0_8px_25px_rgba(249,115,22,0.25)]'
                    : 'border-white/10 bg-black/50 hover:border-blue-500/50 hover:shadow-[0_8px_16px_rgba(59,130,246,0.15)]'
                } hover:-translate-y-1`}
              >
                <div className="mb-3">
                  <h3 className={`text-lg font-bold transition-colors ${
                    repo.featured ? 'text-orange-300 group-hover:text-orange-200' : 'group-hover:text-blue-400'
                  }`}>
                    {repo.name}
                  </h3>
                  {repo.featured && <span className="inline-block text-xs text-orange-300 bg-orange-500/20 px-3 py-1 rounded mt-2 font-semibold">⭐ Featured - RQF Level 6 Exam</span>}
                  {!repo.featured && <span className="inline-block text-xs text-gray-500 bg-white/5 px-2 py-1 rounded mt-2">
                    {repo.language}
                  </span>}
                </div>
                <p className="text-gray-400 text-sm mb-4">{repo.description}</p>
                <div className={`flex items-center text-sm group-hover:gap-2 transition-all ${
                  repo.featured ? 'text-orange-400' : 'text-blue-400'
                }`}>
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center pt-6 border-t border-white/10">
            <a
              href="https://github.com/muzi5622?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Explore All Repositories
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
