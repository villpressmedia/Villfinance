import { ArrowRight, Lock, Target, TrendingUp } from 'lucide-react';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const pillars = [
  {
    icon: Target,
    title: 'Precision Strategies',
    description: 'Every recommendation is built around your timeline, tax position, and risk tolerance.',
  },
  {
    icon: TrendingUp,
    title: 'Consistent Growth',
    description: 'Disciplined rebalancing that compounds steadily through every market cycle.',
  },
  {
    icon: Lock,
    title: 'Secure Assets',
    description: 'Institutional-grade custody and safeguards keep your capital protected.',
  },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rotate-3 rounded-3xl bg-gradient-to-tr from-[#DBA85A]/20 to-transparent blur-lg"
          />
          <div className="relative rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">Trusted Results</p>
            <h3 className="mt-4 text-xl font-bold text-white">A track record built on discipline</h3>
            <ul className="mt-8 space-y-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#141414] text-[#DBA85A]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">About Us</p>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-white lg:text-5xl">Empowering Your Financial Journey</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            ARAISE was founded on a simple belief: everyone deserves access to the kind of thoughtful,
            rigorous financial guidance once reserved for institutions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Our advisors pair deep market expertise with genuine care for your goals — whether you are
            building your first portfolio, planning for retirement, or preserving wealth for the next
            generation.
          </p>
          <a
            href="#services"
            className={`group mt-10 inline-flex items-center gap-2 rounded-md border border-[#DBA85A] bg-transparent px-8 py-4 font-semibold text-[#DBA85A] transition-all duration-300 hover:scale-105 hover:bg-[#DBA85A]/10 ${focusRing}`}
          >
            Discover Our Approach
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
