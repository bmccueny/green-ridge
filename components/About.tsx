"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="wave-divider bg-stone-50 px-6 pt-32 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Two-column: text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="slide-left">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
              About Us
            </h2>
            <h3 className="mt-3 font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              Rooted in Quality
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Green Ridge Landscaping was founded on a simple idea: your outdoor space
              should be something you&apos;re proud of. We&apos;re a family-owned company
              based in the Hudson Valley, and we treat every property like it&apos;s our own.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              From weekly lawn care to full landscape transformations, we bring the
              same attention to detail to every job. No shortcuts, no surprises — just
              honest work and results that speak for themselves.
            </p>
          </div>

          <div className="slide-right delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery-2.jpg"
                alt="Green Ridge team working on a landscape project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="fade-section mt-16 grid grid-cols-3 gap-4 rounded-2xl bg-forest-dark p-8 text-center md:p-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-sage md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
