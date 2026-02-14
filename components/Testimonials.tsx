"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah & Mark T.",
    role: "Homeowners, Rhinebeck",
    quote:
      "Green Ridge completely transformed our backyard. The patio, the plantings, the lighting — it's like we have a whole new outdoor living space. They were professional, on time, and the quality is outstanding.",
  },
  {
    name: "David Chen",
    role: "Property Manager, Kingston",
    quote:
      "We've used Green Ridge for three years running and they're the most reliable crew we've ever worked with. Our commercial properties always look immaculate.",
  },
  {
    name: "Lisa Moreno",
    role: "Homeowner, Hudson",
    quote:
      "I wanted a low-maintenance garden that still looked beautiful and they nailed it. Native plants, great design, and they even set up drip irrigation.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

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
      el.querySelectorAll(".fade-section, .slide-left, .slide-right").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = testimonials;

  return (
    <section
      ref={sectionRef}
      className="wave-divider-stone bg-white px-6 pt-32 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="slide-left">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            Testimonials
          </h2>
          <h3 className="mt-3 font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            What Our Clients Say
          </h3>
        </div>

        {/* Featured testimonial — full width */}
        <div className="fade-section mt-12 rounded-2xl bg-forest-dark p-8 md:p-12">
          <span className="font-serif text-6xl leading-none text-sage/40 md:text-8xl">&ldquo;</span>
          <p className="mt-2 font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
            {featured.quote}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <div className="text-right">
              <p className="font-bold text-white">{featured.name}</p>
              <p className="text-sm text-white/50">{featured.role}</p>
            </div>
          </div>
        </div>

        {/* Two smaller testimonials */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((t, i) => (
            <div
              key={t.name}
              className={`${i === 0 ? "slide-left" : "slide-right"} delay-200 rounded-2xl border border-stone-200 bg-stone-50 p-8`}
            >
              <div className="flex gap-1 text-amber">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-stone-200 pt-4">
                <p className="font-bold text-stone-800">{t.name}</p>
                <p className="text-sm text-stone-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
