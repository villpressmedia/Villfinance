import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBA85A] focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const fieldClass =
  'w-full rounded-xl border border-gray-800 bg-[#141414] px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#DBA85A] focus:ring-1 focus:ring-[#DBA85A]';

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'hello@araise.finance', href: 'mailto:hello@araise.finance' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Location', value: '350 Fifth Avenue, New York, NY' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No backend is wired up yet; swap this for a real submission endpoint.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DBA85A]">Contact Us</p>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-white lg:text-5xl">Let&apos;s Build Your Future</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Book a complimentary consultation. An advisor will respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8 lg:p-10">
            <h3 className="mb-4 text-xl font-bold text-white">Get in touch</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Whether you have a quick question or are ready to start planning, our team is here to help.
            </p>
            <ul className="mt-10 space-y-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#141414] text-[#DBA85A]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className={`rounded-sm font-medium text-white transition-colors duration-300 hover:text-[#DBA85A] ${focusRing}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                  Full name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                Subject
              </label>
              <input id="subject" name="subject" type="text" placeholder="How can we help?" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your goals..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#DBA85A] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#C99849] sm:w-auto ${focusRing}`}
            >
              Send Message
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
            <p role="status" aria-live="polite" className="text-sm text-[#DBA85A]">
              {submitted ? 'Thank you — we will be in touch shortly.' : ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
