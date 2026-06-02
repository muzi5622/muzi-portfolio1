import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMPLATE_ID,
      e.target ,
      import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-blue-950/20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-sm">
              Have a project in mind or want to discuss security solutions? I'd love to hear from you.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                placeholder="Full Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                placeholder="your.email@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 resize-none"
                placeholder="Your message here..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition relative overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Response time: Usually within 24 hours
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
