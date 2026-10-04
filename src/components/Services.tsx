import { ArrowRight, Briefcase, Calculator, Landmark, LineChart, ShieldCheck, Wallet } from 'lucide-react';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const services = [
  {
    icon: LineChart,
    title: 'Investment Management',
    description: 'Actively managed, diversified portfolios designed to capture growth while controlling downside.',
  },
  {
    icon: Landmark,
    title: 'Retirement Planning',
    description: 'Income strategies that turn decades of saving into a comfortable, predictable retirement.',
  },
  {
    icon: Calculator,
    title: 'Tax Optimization',
    description: 'Harvesting, asset location, and timing strategies that keep more of your returns working.',
  },
  {
    icon: ShieldCheck,
    title: 'Wealth Protection',
    description: 'Insurance reviews and hedging approaches that shield your family from the unexpected.',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description: 'Cash-flow, succession, and exit planning for founders and business owners.',
  },
  {
    icon: Wallet,
    title: 'Estate Planning',
    description: 'Structured transfers and trusts that preserve your legacy for the next generation.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">Our Services</p>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-white lg:text-5xl">Solutions Built Around You</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Comprehensive financial services that work together to move you toward what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-[#DBA85A]/50"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#DBA85A]/5 opacity-50 blur-3xl transition-all duration-300 group-hover:bg-[#DBA85A]/10 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-[#DBA85A] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{description}</p>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#DBA85A] transition-colors duration-300 hover:text-[#C99849] ${focusRing}`}
                  aria-label={`Learn more about ${title}`}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
