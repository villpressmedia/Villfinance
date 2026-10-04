import { BarChart3, PieChart, ShieldCheck, User } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Strategic Planning',
    description: 'Clear, data-driven roadmaps aligned with your long-term financial goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Protect what you have built with diversified, stress-tested portfolios.',
  },
  {
    icon: PieChart,
    title: 'Investment Insights',
    description: 'Timely market intelligence that turns complexity into confident decisions.',
  },
  {
    icon: User,
    title: 'Personalized Support',
    description: 'A dedicated advisor who knows your story and answers when you call.',
  },
];

export default function Features() {
  return (
    <section aria-label="Key features" className="relative -mt-8 lg:-mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-gray-800 bg-[#141414] p-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/60 text-[#DBA85A] transition-all duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#DBA85A]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
