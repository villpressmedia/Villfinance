import { ArrowRight } from 'lucide-react';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

export default function Hero() {
  return (
    // No z-index, transform, opacity or background on this section or its
    // descendants: any of those would isolate the video and break the
    // mix-blend-screen knockout against the true-black body.
    <section id="home" className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[480px] w-[480px] rounded-full bg-[#DBA85A]/10 blur-[120px] lg:right-[10%]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">
            Wealth Management Redefined
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-7xl">
            Grow Your Wealth With Confidence
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Expert financial strategies tailored to your goals. We combine disciplined analysis with
            personal guidance to help you build, protect, and grow lasting wealth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-md bg-[#DBA85A] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#C99849] ${focusRing}`}
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className={`inline-flex items-center justify-center rounded-md border border-[#DBA85A] bg-transparent px-8 py-4 font-semibold text-[#DBA85A] transition-all duration-300 hover:scale-105 hover:bg-[#DBA85A]/10 ${focusRing}`}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[440px] mix-blend-screen lg:aspect-[4/3]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="h-full w-full object-contain"
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/finance_coin_animation.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
