import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Lush green lawn with manicured garden beds"
        fill
        priority
        className="object-cover"
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest/50 to-stone-800/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 animate-fade-in-up text-sm font-bold uppercase tracking-[0.3em] text-sage">
          Hudson Valley, NY
        </p>
        <h1 className="animate-fade-in-up delay-100 text-5xl font-bold leading-tight text-white md:text-7xl">
          Your Landscape,
          <br />
          <span className="text-sage">Perfected.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-fade-in-up delay-200 text-lg text-stone-200 md:text-xl">
          Professional landscaping, lawn care, and outdoor design for homes and
          businesses across the Hudson Valley. Quality work you can count on.
        </p>
        <div className="mt-10 flex animate-fade-in-up delay-300 flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-forest px-8 py-3.5 text-lg font-bold uppercase tracking-wider text-white transition-all hover:bg-forest-dark hover:shadow-lg hover:shadow-forest/25"
          >
            Free Estimate
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-lg font-semibold text-white transition-all hover:border-sage hover:bg-sage/10"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
