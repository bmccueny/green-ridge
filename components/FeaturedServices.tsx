"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/data/services";

export default function FeaturedServices() {
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
      id="services"
      ref={sectionRef}
      className="wave-divider-stone bg-white px-6 pt-32 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="slide-left">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            What We Do
          </h2>
          <h3 className="mt-3 font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            Our Services
          </h3>
          <p className="mt-4 max-w-xl text-stone-600">
            From weekly lawn maintenance to complete landscape overhauls, we offer
            a full range of services to keep your property looking its best.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <div
              key={service.name}
              className={`${i % 2 === 0 ? "slide-left" : "slide-right"} delay-${((i % 3) + 1) * 100} group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full overflow-hidden ${i === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[400px]" : "aspect-[4/3]"}`}>
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-800/80 via-stone-800/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className={`font-serif font-bold text-white ${i === 0 ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {service.name}
                  </h4>
                  <p className={`mt-1 text-white/70 ${i === 0 ? "text-base" : "text-sm"}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-section mt-12">
          <Link
            href="/services"
            className="inline-block rounded-full border-2 border-forest px-8 py-3 font-bold uppercase tracking-wider text-forest transition-all hover:bg-forest hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
