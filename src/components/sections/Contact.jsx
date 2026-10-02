import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

const COOLDOWN_MS = 60_000;
const COOLDOWN_STORAGE_KEY = "portfolio-contact-cooldown-until";

const readCooldownUntil = () => {
  try {
    return Number(window.localStorage.getItem(COOLDOWN_STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(() =>
    Math.max(0, Math.ceil((readCooldownUntil() - Date.now()) / 1000)),
  );
  const submissionLock = useRef(false);
  const cooldownUntil = useRef(readCooldownUntil());

  useEffect(() => {
    const updateCooldown = () => {
      const remaining = Math.max(
        0,
        Math.ceil((cooldownUntil.current - Date.now()) / 1000),
      );
      setCooldownRemaining(remaining);

      if (remaining === 0 && cooldownUntil.current > 0) {
        cooldownUntil.current = 0;
        try {
          window.localStorage.removeItem(COOLDOWN_STORAGE_KEY);
        } catch {
          // The in-memory cooldown still works when browser storage is unavailable.
        }
      }
    };

    updateCooldown();
    const intervalId = window.setInterval(updateCooldown, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submissionLock.current || cooldownUntil.current > Date.now()) return;

    submissionLock.current = true;
    setIsSending(true);
    setStatus({ type: "pending", message: "Sending your message..." });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        event.currentTarget,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        const nextAllowedSend = Date.now() + COOLDOWN_MS;
        cooldownUntil.current = nextAllowedSend;
        setCooldownRemaining(Math.ceil(COOLDOWN_MS / 1000));
        try {
          window.localStorage.setItem(
            COOLDOWN_STORAGE_KEY,
            String(nextAllowedSend),
          );
        } catch {
          // Keep the cooldown for this session if browser storage is unavailable.
        }
        setFormData({ name: "", email: "", message: "" });
        setStatus({
          type: "success",
          message: "Message sent successfully. Thanks for getting in touch.",
        });
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Message could not be sent. Please try again shortly.",
        });
      })
      .finally(() => {
        submissionLock.current = false;
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative grid min-h-[80vh] w-full items-center overflow-hidden border-t border-white/5 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.13),transparent_55%)] bg-black py-20 sm:py-24"
    >
      <RevealOnScroll>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="pt-2">
            <p className="mb-4 text-sm font-semibold text-cyan-300">CONTACT</p>
            <h2 className="max-w-lg text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s talk security.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              Have a security collaboration, responsible disclosure, or project in mind? Send me a message and I&apos;ll get back to you.
            </p>
            <a
              href="mailto:muzamil29876@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-gray-200 transition hover:text-cyan-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-cyan-300">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>muzamil29876@gmail.com</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Typical response time: within 24 hours.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={100}
                  value={formData.name}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/70 focus:bg-black/60 focus:ring-2 focus:ring-cyan-400/15"
                  placeholder="Your name"
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/70 focus:bg-black/60 focus:ring-2 focus:ring-cyan-400/15"
                  placeholder="you@example.com"
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  value={formData.message}
                  className="w-full resize-y rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/70 focus:bg-black/60 focus:ring-2 focus:ring-cyan-400/15"
                  placeholder="How can I help?"
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                />
              </div>

              {status && (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`rounded-md border px-4 py-3 text-sm ${
                    status.type === "error"
                      ? "border-red-400/20 bg-red-400/5 text-red-200"
                      : status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-200"
                        : "border-cyan-400/20 bg-cyan-400/5 text-cyan-100"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending || cooldownRemaining > 0}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-300"
              >
                {isSending
                  ? "Sending..."
                  : cooldownRemaining > 0
                    ? `Send again in ${cooldownRemaining}s`
                    : "Send Message"}
                {!isSending && cooldownRemaining === 0 && (
                  <Send size={17} aria-hidden="true" />
                )}
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
