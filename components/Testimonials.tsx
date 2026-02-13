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
      "We've used Green Ridge for three years running and they're the most reliable crew we've ever worked with. Our commercial properties always look immaculate. Their seasonal cleanup service alone is worth every penny.",
  },
  {
    name: "Lisa Moreno",
    role: "Homeowner, Hudson",
    quote:
      "I wanted a low-maintenance garden that still looked beautiful and they nailed it. Native plants, great design, and they even set up drip irrigation so I barely have to think about it. Highly recommend.",
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
      el.querySelectorAll(".fade-section").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-section text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            Testimonials
          </h2>
          <h3 className="mt-3 text-4xl font-bold text-stone-800 md:text-5xl">
            What Our Clients Say
          </h3>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-section delay-${(i + 1) * 100} rounded-2xl border border-stone-200 bg-stone-50 p-8`}
            >
              {/* Star rating */}
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
