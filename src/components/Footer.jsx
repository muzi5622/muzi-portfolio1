import { Linkedin, PenTool, Github, Globe, Mail } from "lucide-react"; // Import icons

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[rgba(10,10,10,0.8)] text-white text-center border-t border-white/10">
      <div className="mb-4">
        <p className="text-gray-400 text-sm mb-4">🌐 Connect With Me</p>
        <div className="flex justify-center space-x-6 flex-wrap gap-4">
          <a
            href="https://www.0xmuzamil.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-2"
            title="Portfolio"
          >
            <Globe size={24} />
            <span className="text-sm hidden md:inline">Portfolio</span>
          </a>
          <a
            href="https://0xmuzamil.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center gap-2"
            title="Blog"
          >
            <PenTool size={24} />
            <span className="text-sm hidden md:inline">Blog</span>
          </a>
          <a
            href="https://www.linkedin.com/in/m-muzammal-99m/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors flex items-center gap-2"
            title="LinkedIn"
          >
            <Linkedin size={24} />
            <span className="text-sm hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/muzi5622"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors flex items-center gap-2"
            title="GitHub"
          >
            <Github size={24} />
            <span className="text-sm hidden md:inline">GitHub</span>
          </a>
          <a
            href="mailto:muzamil29876@gmail.com"
            className="hover:text-red-400 transition-colors flex items-center gap-2"
            title="Email"
          >
            <Mail size={24} />
            <span className="text-sm hidden md:inline">Email</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 pt-4">
        <p className="text-gray-500 text-xs">
          © 2025 Muzammal. All rights reserved. | Building Secure & Intelligent Solutions
        </p>
      </div>
    </footer>
  );
};
