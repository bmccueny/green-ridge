import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden">
      {/* Left content panel */}
      <div className="relative z-10 flex w-full flex-col justify-center bg-forest-dark px-8 py-32 md:w-1/2 md:px-16 lg:px-20">
        <p className="animate-fade-in-up text-sm font-bold uppercase tracking-[0.3em] text-sage">
          Hudson Valley, NY
        </p>
        <h1 className="mt-4 animate-fade-in-up delay-100 font-serif text-5xl font-bold leading-tight text-white lg:text-7xl">
          Your Landscape,
          <br />
          <span className="text-sage">Perfected.</span>
        </h1>
        <p className="mt-6 max-w-md animate-fade-in-up delay-200 text-lg leading-relaxed text-white/70">
          Professional landscaping, lawn care, and outdoor design for homes and
          businesses across the Hudson Valley. Quality work you can count on.
        </p>
        <div className="mt-10 flex animate-fade-in-up delay-300 flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3.5 text-center text-lg font-bold uppercase tracking-wider text-forest transition-all hover:bg-sage-light hover:shadow-lg"
          >
            Free Estimate
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-center text-lg font-semibold text-white transition-all hover:border-sage hover:bg-sage/10"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Right image panel */}
      <div className="absolute inset-0 md:relative md:w-1/2">
        <Image
          src="/images/hero.jpg"
          alt="Lush green lawn with manicured garden beds"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay on mobile only (when image is behind text) */}
        <div className="absolute inset-0 bg-forest-dark/80 md:hidden" />
      </div>

      {/* Curved divider between panels — desktop only */}
      <div className="pointer-events-none absolute inset-y-0 left-[46%] z-20 hidden w-[12%] md:block">
        <div className="h-full w-full bg-forest-dark" style={{ clipPath: "ellipse(70% 55% at 0% 50%)" }} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-20 animate-bounce md:left-16">
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
