"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  { src: "/images/gallery-1.jpg", alt: "Stone patio with outdoor seating area", label: "Patio Design", tall: true },
  { src: "/images/gallery-2.jpg", alt: "Modern home with professional landscaping", label: "Full Landscape", tall: false },
  { src: "/images/gallery-3.jpg", alt: "Manicured lawn with garden borders", label: "Lawn & Garden", tall: false },
  { src: "/images/gallery-4.jpg", alt: "Garden pathway with stone edging", label: "Walkway Install", tall: true },
  { src: "/images/gallery-5.jpg", alt: "Backyard garden with lush plantings", label: "Garden Design", tall: false },
  { src: "/images/gallery-6.jpg", alt: "Colorful flower beds and landscaping", label: "Seasonal Color", tall: true },
];

export default function Gallery() {
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

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="wave-divider bg-stone-50 px-6 pt-32 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="slide-right">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
            Our Work
          </h2>
          <h3 className="mt-3 font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            Project Gallery
          </h3>
          <p className="mt-4 max-w-xl text-stone-600">
            A look at some of our recent projects across the Hudson Valley.
            Every property tells a story — here are a few of ours.
          </p>
        </div>

        {/* Masonry layout */}
        <div className="masonry-gallery mt-12">
          {projects.map((project, i) => (
            <div
              key={project.label}
              className={`${i % 2 === 0 ? "fade-section" : "fade-section"} delay-${((i % 3) + 1) * 100} group relative overflow-hidden rounded-2xl`}
            >
              <div className={`relative w-full ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-800/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="font-serif text-lg font-bold text-white">{project.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
