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
      el.querySelectorAll(".fade-section").forEach((child) =>
        observer.observe(child)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-section text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            What We Do
          </h2>
          <h3 className="mt-3 text-4xl font-bold text-stone-800 md:text-5xl">
            Our Services
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            From weekly lawn maintenance to complete landscape overhauls, we offer
            a full range of services to keep your property looking its best.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <div
              key={service.name}
              className={`fade-section delay-${((i % 3) + 1) * 100} group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10`}
            >
              {service.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-800/40 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <h4 className="text-lg font-bold text-stone-800">
                  {service.name}
                </h4>
                <p className="mt-1 text-sm text-stone-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-section mt-12 text-center">
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
