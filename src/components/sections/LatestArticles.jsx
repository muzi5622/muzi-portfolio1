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
    <section id="articles" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center">
            <a
              href="https://www.0xmuzamil.dev/"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              View All Blogs →
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
