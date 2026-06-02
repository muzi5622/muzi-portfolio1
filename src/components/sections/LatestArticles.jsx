import { RevealOnScroll } from "../RevealOnScroll";

export const LatestArticles = () => {
  const articles = [
    {
      title: "Will AI Replace Humans in Pentesting?",
      description:
        "A deep dive into the role of artificial intelligence in penetration testing, examining the potential, limitations, and ethical implications of replacing humans with machines.",
      url: "https://www.0xmuzamil.dev/posts/will-ai-replace-humans-in-pentesting",
    },
    {
      title: "How to Get Started with Bug Bounties",
      description:
        "A beginner-friendly and practical guide to starting your journey in bug bounty hunting. Learn tools, tips, mindset, and how to find your first vulnerability.",
      url: "https://www.0xmuzamil.dev/posts/how-to-get-started-in-bug-bounty",
    },
    {
      title: "Roadmap to Become an Ethical Hacker in 2025 – Step-by-Step Guide",
      description:
        "Want to become an ethical hacker in 2025 but don’t know where to start? This guide breaks down a clear, step-by-step roadmap for absolute beginners to start their journey toward a career in hacking and cybersecurity.",
      url: "https://www.0xmuzamil.dev/posts/roadmap-to-become-ethical-hacker-in-2025",
    },
    {
      title: "Understanding the Hacker Mindset – It’s Not Just Code",
      description:
        "To be a hacker, you don't just need tools—you need a mindset. This post explores the emotional, psychological, and mental shifts you need to succeed in ethical hacking and bug bounty.",
      url: "https://www.0xmuzamil.dev/posts/understanding-the-hacker-mindset",
    },
  ];

  return (
    <section id="articles" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technical insights on cybersecurity, DevOps, and AI automation from hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(59,130,246,0.15)] transition-all duration-300 group bg-black/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center text-blue-400 text-sm group-hover:gap-2 transition-all">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* View All Blog Button */}
          <div className="text-center pt-8 border-t border-white/10">
            <a
              href="https://www.0xmuzamil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Explore Full Blog
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
