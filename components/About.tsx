"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind. We carry comprehensive liability and workers' compensation coverage.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "15+ Years Experience",
    description:
      "Over fifteen years of hands-on experience transforming Hudson Valley properties. We know the local soil, climate, and what thrives here.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "Locally Owned",
    description:
      "We live and work right here in the Hudson Valley. When you hire Green Ridge, you're supporting a neighbor who takes pride in the community.",
  },
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
      el.querySelectorAll(".fade-section").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-stone-50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-section mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
            About Us
          </h2>
          <h3 className="mt-3 text-4xl font-bold text-stone-800 md:text-5xl">
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`fade-section delay-${(i + 1) * 100} rounded-2xl border border-stone-200 bg-white p-8 text-center transition-shadow hover:shadow-lg hover:shadow-forest/5`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                {feature.icon}
              </div>
              <h4 className="mt-5 text-xl font-bold text-stone-800">
                {feature.title}
              </h4>
              <p className="mt-3 text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
