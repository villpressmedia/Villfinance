import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

export function Logo() {
  return (
    <a href="#home" className={`flex items-center gap-3 rounded-md ${focusRing}`} aria-label="ARAISE home">
      <span className="flex items-end gap-1" aria-hidden="true">
        <span className="h-4 w-1.5 rounded-sm bg-[#DBA85A]" />
        <span className="h-6 w-1.5 rounded-sm bg-[#DBA85A]" />
        <span className="h-8 w-1.5 rounded-sm bg-[#DBA85A]" />
      </span>
      <span className="text-xl font-bold tracking-tight text-white">ARAISE</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50" aria-label="Primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active = link.label === 'Home';
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-sm text-sm font-medium transition-colors duration-300 ${focusRing} ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#DBA85A]" />}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden rounded-md bg-[#DBA85A] px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#C99849] md:inline-block ${focusRing}`}
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`rounded-md p-2 text-gray-400 transition-colors duration-300 hover:text-white md:hidden ${focusRing}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="mx-6 rounded-2xl border border-gray-800 bg-[#0A0A0A] p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-sm text-sm font-medium transition-colors duration-300 ${focusRing} ${
                    link.label === 'Home' ? 'text-[#DBA85A]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-6 block rounded-md bg-[#DBA85A] px-6 py-2.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-[#C99849] ${focusRing}`}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
