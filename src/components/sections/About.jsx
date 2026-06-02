import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const OffensiveSecurity = ["Nessus", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "Aircrack-ng", "Hydra", "Hashcat", "Gophish", "Evilginx", "Ettercap", "Bettercap", "John the Ripper", "sqlmap", "Gobuster", "Nikto"];
  const DevOpsTools = ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "Jenkins", "Git", "GitHub", "GitHub Actions", "Vagrant"];
  const Programming = ["Python", "Bash", "YAML", "Flask", "Selenium", "JavaScript", "MySQL"];
  const OperatingSystems = ["Kali Linux", "Ubuntu", "Debian", "CentOS", "RHEL", "Windows", "Windows Server", "Tails OS"];
  const CloudTools = ["AWS", "Azure", "VMware", "VirtualBox"];
  const Monitoring = ["ELK Stack", "Jira", "Splunk", "Prometheus", "Grafana"];
  const AIMLTools = ["Machine Learning", "Deep Learning", "Data Science", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Jupyter", "OpenCV"];
  const WebSecurity = ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "API Security", "Web Reconnaissance", "Vulnerability Scanning", "Responsible Disclosure"];
  const Web3Security = ["Smart Contract Analysis", "Blockchain Testing", "DeFi Security", "Solidity Review", "Cryptography", "Ethereum", "Web3.js"];

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
                Experienced in designing and implementing secure cloud infrastructure with a focus on automation and intelligent operations. 
                Proficient in penetration testing, infrastructure automation, and leveraging AI/ML for security and operational efficiency.
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
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <p className="font-semibold text-orange-300 mb-2">🎯 Bug Bounty & Web Security</p>
                  <p className="text-sm text-gray-400">Web vulnerability research, bug finding, responsible disclosure, bug bounty reports</p>
                </div>
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <p className="font-semibold text-cyan-300 mb-2">🔗 Web3 & Blockchain Security</p>
                  <p className="text-sm text-gray-400">Smart contract analysis, blockchain security research, decentralized application testing</p>
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

                <div className="md:col-span-2 lg:col-span-3">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">🔗 Web3 & Blockchain Security</h4>
                  <div className="flex flex-wrap gap-2">
                    {Web3Security.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-cyan-500/10 text-cyan-300 py-1 px-2 rounded text-xs hover:bg-cyan-500/20 transition border border-cyan-500/20"
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
              <div className="p-6 rounded-xl border border-white/10 bg-blue-500/5">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Education</h3>
                <div className="space-y-5">
                  <div>
                    <p className="font-semibold text-white">Diploma in AIOps (RQF Level 6)</p>
                    <p className="text-sm text-gray-400">Alnafi International College (2025–2026)</p>
                    <p className="text-xs text-gray-500 mt-1">UK Bachelor's Degree Equivalent</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">Intermediate in Computer Science</p>
                    <p className="text-sm text-gray-400">Tameer-i-Wattan Public Schools & Colleges (2024–2026)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-purple-500/5">
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
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span><strong>Web3 & Blockchain Security</strong> - Smart contracts, DeFi protocols, security research</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-cyan-500/5 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">🔗 Current Learning & Practice</h3>
                <p className="text-sm text-gray-400 mb-4">Active focus areas in Web3, blockchain security, and advanced threat intelligence:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Blockchain architecture & consensus mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Smart contract vulnerability analysis & auditing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>DeFi protocol security & economic attacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Cryptocurrency wallet security & best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▪</span>
                    <span>Bug bounty hunting in blockchain projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

