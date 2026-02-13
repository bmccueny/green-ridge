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
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-forest">
          Green Ridge Landscaping
        </h2>
        <h1 className="mt-3 text-5xl font-bold text-stone-800 md:text-6xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
          From weekly lawn maintenance to complete outdoor transformations, we
          have the skills and experience to handle any project. Every job starts
          with a free consultation.
        </p>
      </div>

      {/* Service Categories */}
      <div className="mx-auto mt-16 max-w-5xl px-6">
        {serviceData.map((category) => (
          <div key={category.category} className="mb-16">
            {/* Category header */}
            <div className="mb-2 flex items-center gap-4">
              <h3 className="whitespace-nowrap text-2xl font-bold text-stone-800">
                {category.category}
              </h3>
              <div className="h-px w-full bg-stone-200" />
            </div>
            <p className="mb-8 text-stone-400">{category.tagline}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex overflow-hidden rounded-xl border border-stone-200 bg-white transition-all hover:border-forest/30 hover:shadow-md hover:shadow-forest/5"
                >
                  {item.image && (
                    <div className="relative w-24 shrink-0 sm:w-28">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 items-start justify-between gap-4 p-4">
                    <div>
                      <h4 className="font-bold text-stone-800 transition-colors group-hover:text-forest">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
