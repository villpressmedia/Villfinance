import { Check } from 'lucide-react';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

type Tier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Essential guidance for individuals beginning their wealth journey.',
    features: [
      'Personal financial assessment',
      'Automated portfolio management',
      'Quarterly performance reports',
      'Email support',
    ],
    cta: 'Choose Starter',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Hands-on strategy for growing portfolios and busy professionals.',
    features: [
      'Everything in Starter',
      'Dedicated financial advisor',
      'Tax optimization strategies',
      'Monthly strategy sessions',
      'Priority phone & email support',
    ],
    cta: 'Choose Professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke wealth management for families, founders, and institutions.',
    features: [
      'Everything in Professional',
      'Multi-entity & estate planning',
      'Private market access',
      'Custom reporting & integrations',
      '24/7 concierge support',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">Pricing</p>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-white lg:text-5xl">Plans That Scale With You</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Transparent pricing with no hidden fees. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                tier.featured
                  ? '-translate-y-4 border-2 border-[#DBA85A] bg-[#141414] shadow-2xl shadow-[#DBA85A]/10'
                  : 'border border-gray-800 bg-[#0A0A0A] hover:border-[#DBA85A]/50'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#DBA85A] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <h3 className="mb-4 text-xl font-bold text-white">{tier.name}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{tier.description}</p>
              <p className="mt-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-white">{tier.price}</span>
                {tier.period && <span className="text-sm text-gray-400">{tier.period}</span>}
              </p>
              <ul className="mb-10 mt-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#DBA85A]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block rounded-md px-6 py-3 text-center text-sm font-semibold transition-all duration-300 hover:scale-105 ${focusRing} ${
                  tier.featured
                    ? 'bg-[#DBA85A] text-black hover:bg-[#C99849]'
                    : 'border border-[#DBA85A] text-[#DBA85A] hover:bg-[#DBA85A]/10'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
