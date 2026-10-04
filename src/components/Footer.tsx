import { useState, type FormEvent } from 'react';
import { Camera, Globe, MessageCircle } from 'lucide-react';
import { Logo } from './Navbar';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Market Insights', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
];

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: MessageCircle, label: 'Community', href: '#' },
  { icon: Camera, label: 'Gallery', href: '#' },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  // No backend is wired up yet; swap this for a real newsletter provider.
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Our mission is to make disciplined, transparent wealth management accessible to everyone
              ready to build their financial future.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-[#0A0A0A] text-gray-400 transition-all duration-300 hover:border-[#DBA85A] hover:text-[#DBA85A] ${focusRing}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`rounded-sm text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white ${focusRing}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">Newsletter</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Monthly market insights and planning tips, straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-xl border border-gray-800 bg-[#141414] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#DBA85A] focus:ring-1 focus:ring-[#DBA85A]"
              />
              <button
                type="submit"
                className={`rounded-xl bg-[#DBA85A] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#C99849] ${focusRing}`}
              >
                Subscribe
              </button>
            </form>
            <p role="status" aria-live="polite" className="mt-3 text-sm text-[#DBA85A]">
              {subscribed ? 'You are subscribed.' : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} ARAISE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className={`rounded-sm transition-colors duration-300 hover:text-white ${focusRing}`}>
              Privacy Policy
            </a>
            <a href="#" className={`rounded-sm transition-colors duration-300 hover:text-white ${focusRing}`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
