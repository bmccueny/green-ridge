"use client";

import { useEffect, useRef, useState } from "react";

const hours = [
  { days: "Monday - Friday", time: "7:00 AM - 5:00 PM" },
  { days: "Saturday", time: "8:00 AM - 2:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-section").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-stone-50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-section text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
            Get in Touch
          </h2>
          <h3 className="mt-3 text-4xl font-bold text-stone-800 md:text-5xl">
            Request a Free Estimate
          </h3>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Info + Map */}
          <div className="fade-section space-y-8">
            <div>
              <h4 className="text-lg font-bold text-stone-800">Service Area</h4>
              <p className="mt-2 text-stone-600">
                Serving the Hudson Valley including Hudson, Catskill, Kingston,
                Rhinebeck, Saugerties, and surrounding communities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-800">Hours</h4>
              <div className="mt-2 space-y-1">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between text-stone-600"
                  >
                    <span>{h.days}</span>
                    <span
                      className={`font-medium ${h.time === "Closed" ? "text-amber" : ""}`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-800">Contact</h4>
              <p className="mt-2 text-stone-600">
                Phone: (518) 555-0147
                <br />
                Email: info@greenridgelandscaping.com
              </p>
            </div>

            {/* Interactive Map */}
            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <iframe
                title="Green Ridge Landscaping Service Area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1000%2C42.0500%2C-73.7000%2C42.3500&layer=mapnik&marker=42.2529%2C-73.7910"
                width="100%"
                height="200"
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-section delay-200">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-bold text-stone-800">
                Free Estimate Request
              </h4>
              <p className="mt-1 text-sm text-stone-400">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a free, no-obligation estimate.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-forest/10 p-6 text-center">
                  <p className="text-lg font-semibold text-forest">
                    Thanks for reaching out!
                  </p>
                  <p className="mt-1 text-sm text-forest">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-stone-600"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-600"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Describe your project, property size, timeline, etc."
                      className="mt-1 w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none transition-colors placeholder:text-stone-300 focus:border-forest focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-forest py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-forest-dark"
                  >
                    Request Free Estimate
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
