import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/services";

export const metadata = {
  title: "Services | Green Ridge Landscaping",
  description:
    "Full range of landscaping services — lawn care, garden design, hardscaping, tree service, seasonal cleanup, and irrigation in the Hudson Valley.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
          Green Ridge Landscaping
        </h2>
        <h1 className="mt-3 font-serif text-5xl font-bold text-stone-800 md:text-6xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-xl text-lg text-stone-600">
          From weekly lawn maintenance to complete outdoor transformations, we
          have the skills and experience to handle any project. Every job starts
          with a free consultation.
        </p>
      </div>

      {/* Service Categories — alternating rows */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        {serviceData.map((category, catIndex) => {
          const heroImage = category.items.find((item) => item.image)?.image;
          const isReversed = catIndex % 2 !== 0;

          return (
            <div key={category.category} className="mb-24">
              {/* Alternating hero row: image + text */}
              <div className={`grid items-center gap-8 lg:grid-cols-2 ${isReversed ? "lg:direction-rtl" : ""}`}>
                {/* Image side */}
                <div className={`${isReversed ? "lg:order-2" : ""}`}>
                  {heroImage && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={heroImage}
                        alt={category.category}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Text side */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <h3 className="font-serif text-3xl font-bold text-stone-800 md:text-4xl">
                    {category.category}
                  </h3>
                  <p className="mt-2 text-lg text-stone-400">{category.tagline}</p>

                  <div className="mt-6 space-y-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl border border-stone-200 bg-stone-50 p-4 transition-colors hover:border-forest/30"
                      >
                        <h4 className="font-bold text-stone-800">{item.name}</h4>
                        <p className="mt-1 text-sm text-stone-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back link + CTA */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-block rounded-full border-2 border-stone-300 px-8 py-3 font-bold uppercase tracking-wider text-stone-600 transition-all hover:border-stone-800 hover:text-stone-800"
        >
          &larr; Back to Home
        </Link>
        <a
          href="/#contact"
          className="inline-block rounded-full bg-forest px-8 py-3 font-bold uppercase tracking-wider text-white transition-all hover:bg-forest-dark"
        >
          Get a Free Estimate
        </a>
      </div>
    </div>
  );
}
