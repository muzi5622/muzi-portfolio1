import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, School, ShieldCheck, X } from "lucide-react";

export const About = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  useEffect(() => {
    if (!isCertificateOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsCertificateOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCertificateOpen]);

  const OffensiveSecurity = ["Nessus", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "Aircrack-ng", "Hydra", "Hashcat", "Gophish", "Evilginx", "Ettercap", "Bettercap", "John the Ripper", "sqlmap", "Gobuster", "Nikto"];
  const DevOpsTools = ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "Jenkins", "Git", "GitHub", "GitHub Actions", "Vagrant"];
  const Programming = ["Python", "Bash", "YAML", "Flask", "Selenium", "JavaScript", "MySQL"];
  const OperatingSystems = ["Kali Linux", "Ubuntu", "Debian", "CentOS", "RHEL", "Windows", "Windows Server", "Tails OS"];
  const CloudTools = ["AWS", "Azure", "VMware", "VirtualBox"];
  const Monitoring = ["ELK Stack", "Jira", "Splunk", "Prometheus", "Grafana"];
  const AIMLTools = ["Machine Learning", "Deep Learning", "Data Science", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Jupyter", "OpenCV"];
  const WebSecurity = ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "API Security", "Web Reconnaissance", "Vulnerability Scanning", "Responsible Disclosure"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black relative"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Content box with semi-transparent background */}
          <div className="rounded-xl p-8 border-white/10 border bg-black/70 text-gray-300">
            {/* Professional Summary */}
            <div className="mb-12 pb-8 border-b border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Professional Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                Bug bounty hunting and ethical web application testing are my primary specialization. I focus on finding, validating, and responsibly reporting vulnerabilities, supported by experience in cloud security, automation, and AI-driven operations.
              </p>
            </div>

            {/* Expertise Highlights */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="font-semibold text-blue-300 mb-2">🔐 Security & Infrastructure</p>
                  <p className="text-sm text-gray-400">Penetration testing, vulnerability assessment, infrastructure hardening</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="font-semibold text-purple-300 mb-2">⚙️ DevOps & Automation</p>
                  <p className="text-sm text-gray-400">CI/CD pipelines, infrastructure as code, container orchestration</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="font-semibold text-green-300 mb-2">🤖 AI & Machine Learning</p>
                  <p className="text-sm text-gray-400">ML-driven automation, data analysis, intelligent monitoring</p>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <p className="font-semibold text-yellow-300 mb-2">🐧 Linux & Systems</p>
                  <p className="text-sm text-gray-400">RHEL, Ubuntu, kernel tuning, system optimization</p>
                </div>
                <div className="order-first p-4 rounded-lg bg-orange-500/15 border border-orange-400/40 md:col-span-2">
                  <p className="font-semibold text-orange-300 mb-2">🎯 Primary Specialization: Bug Bounty Hunting</p>
                  <p className="text-sm text-gray-300">Web vulnerability research, practical security testing, clear reporting, and responsible disclosure</p>
                </div>
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <p className="font-semibold text-cyan-300 mb-2">Web Application Security</p>
                  <p className="text-sm text-gray-400">Ethical web hacking, vulnerability research, web reconnaissance, and responsible disclosure</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Security & Pentesting</h4>
                  <div className="flex flex-wrap gap-2">
                    {OffensiveSecurity.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-red-500/10 text-red-300 py-1 px-2 rounded text-xs hover:bg-red-500/20 transition border border-red-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-yellow-400">DevOps & Automation</h4>
                  <div className="flex flex-wrap gap-2">
                    {DevOpsTools.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-yellow-500/10 text-yellow-300 py-1 px-2 rounded text-xs hover:bg-yellow-500/20 transition border border-yellow-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-400">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {Programming.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-green-500/10 text-green-300 py-1 px-2 rounded text-xs hover:bg-green-500/20 transition border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Operating Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {OperatingSystems.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-300 py-1 px-2 rounded text-xs hover:bg-purple-500/20 transition border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Cloud & Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {CloudTools.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-orange-500/10 text-orange-300 py-1 px-2 rounded text-xs hover:bg-orange-500/20 transition border border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Monitoring & Logging</h4>
                  <div className="flex flex-wrap gap-2">
                    {Monitoring.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-cyan-500/10 text-cyan-300 py-1 px-2 rounded text-xs hover:bg-cyan-500/20 transition border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <h4 className="text-lg font-semibold mb-3 text-pink-400">AI / ML & Data Science</h4>
                  <div className="flex flex-wrap gap-2">
                    {AIMLTools.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-pink-500/10 text-pink-300 py-1 px-2 rounded text-xs hover:bg-pink-500/20 transition border border-pink-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">🎯 Web Security & Bug Bounty</h4>
                  <div className="flex flex-wrap gap-2">
                    {WebSecurity.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-orange-500/10 text-orange-300 py-1 px-2 rounded text-xs hover:bg-orange-500/20 transition border border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            {/* Education and Professional Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="p-6 rounded-xl border border-white/10 bg-blue-500/5 md:col-span-2">
                <h3 className="text-xl font-bold mb-5 text-blue-400">Education</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4E0BAQFljvLxti0vLg/company-logo_100_100/company-logo_100_100/0/1630631496445/paf_iast_logo?e=1792627200&v=beta&t=KR5uDZt16A3025YNt4hZEpXq-OLYqNYyZZwJ0lOMz8M"
                      alt="Pak-Austria Fachhochschule logo"
                      className="h-12 w-12 shrink-0 rounded bg-white object-contain p-1"
                    />
                    <div>
                      <p className="font-semibold text-white">BS Cyber Security, Computer Science</p>
                      <p className="text-sm text-gray-400">Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology</p>
                      <p className="text-xs text-gray-500 mt-1">Sep 2026 – Sep 2030</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D0BAQHiKV6GvzOwvw/company-logo_100_100/company-logo_100_100/0/1739190427248/al_nafi_logo?e=1792627200&v=beta&t=kzi0ihjhDnJdIdpvXZqKEZY5sySfoevY9xa4lHARMT0"
                      alt="Al Nafi International College logo"
                      className="h-12 w-12 shrink-0 rounded bg-white object-contain p-1"
                    />
                    <div>
                      <p className="font-semibold text-white">AIOps Edqual Level 6, Artificial Intelligence Operations</p>
                      <p className="text-sm text-gray-400">Al Nafi International College</p>
                      <p className="text-xs text-gray-500 mt-1">Mar 2025 – Sep 2026</p>
                      <p className="text-sm text-gray-400 mt-2">RQF Level 6 diploma focused on Cloud Cybersecurity, DevOps, SysOps, and AI-driven IT operations. Covers secure cloud infrastructure, automation, containerization, monitoring, incident response, Python, Linux, CI/CD, Kubernetes, Docker, and cloud platforms.</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2 border-t border-white/10 pt-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white">
                        <School size={26} className="text-blue-700" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Intermediate, Computer Science</p>
                        <p className="text-sm text-gray-400">Tameer-i-Wattan Public Schools & Colleges, GoE, Pakistan</p>
                        <p className="text-xs text-gray-500 mt-1">May 2024 – Aug 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 overflow-hidden rounded-xl border border-emerald-400/25 bg-gradient-to-br from-emerald-950/40 via-black to-black">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-3 bg-white/5 p-3 sm:p-5">
                    <button
                      type="button"
                      onClick={() => setIsCertificateOpen(true)}
                      aria-label="View full-size PKCERT certificate"
                      aria-haspopup="dialog"
                      className="group block w-full cursor-zoom-in text-left"
                    >
                      <img
                        src="/image.png"
                        alt="PKCERT Cyber Patriot Certificate of Recognition for reporting a high-severity security vulnerability"
                        loading="lazy"
                        className="h-full max-h-[420px] w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-2">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                      <ShieldCheck size={22} aria-hidden="true" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">PKCERT Recognition</p>
                    <h3 className="text-2xl font-bold text-white">Cyber Patriot</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      Recognized by Pakistan&apos;s National CERT for reporting a high-severity security vulnerability in a government website.
                    </p>
                    <div className="mt-5">
                      <p className="text-xs uppercase tracking-wider text-gray-500">Certificate ID</p>
                      <p className="mt-1 font-mono text-sm text-gray-200">PKC-CPVRO-26-0715</p>
                    </div>
                    <a
                      href="https://vdp.pkcert.gov.pk/verify-certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Verify Certificate
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-purple-500/5 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Certifications & Focus Areas</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▪</span>
                    <span><strong>Cloud Cybersecurity</strong> - Secure infrastructure design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▪</span>
                    <span><strong>DevOps & SysOps</strong> - Automation & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▪</span>
                    <span><strong>AI & Machine Learning</strong> - Intelligent operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▪</span>
                    <span><strong>Penetration Testing</strong> - Ethical hacking practices</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-cyan-500/5 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Current Learning & Practice</h3>
                <p className="text-sm text-gray-400 mb-4">Actively bug hunting in authorized scopes while exploring advanced web application and AI security:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Finding, validating, and documenting vulnerabilities through ethical bug bounty practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Access control weaknesses and business logic vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Advanced web vulnerabilities, including web cache poisoning and server-side template injection (SSTI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>API security testing, web reconnaissance, and OWASP Top 10 issues such as SQL injection and XSS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Exploring AI security, including prompt injection and secure AI application design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Responsible disclosure and clear, reproducible vulnerability reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
        {isCertificateOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            role="presentation"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsCertificateOpen(false);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="PKCERT certificate preview"
              className="relative flex max-h-full w-full max-w-6xl items-center justify-center"
            >
              <button
                type="button"
                onClick={() => setIsCertificateOpen(false)}
                aria-label="Close certificate preview"
                className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <img
                src="/image.png"
                alt="Full-size PKCERT Cyber Patriot Certificate of Recognition for reporting a high-severity security vulnerability"
                className="max-h-[calc(100vh-4rem)] max-w-full rounded-md object-contain"
              />
            </div>
          </div>
        )}
    </section>
  );
};

