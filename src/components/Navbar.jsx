import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-blue-500/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors">
            &lt;Mu<span className="text-blue-500">zi</span>&gt;
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="w-full h-0.5 bg-white rounded transition"></span>
            <span className="w-full h-0.5 bg-white rounded transition"></span>
            <span className="w-full h-0.5 bg-white rounded transition"></span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {["Home", "About", "Articles", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
