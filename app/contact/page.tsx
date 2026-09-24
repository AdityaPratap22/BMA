import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact BMA — Book a Free Strategy Session | Best Marketing Agency',
  description: 'Reach out to BMA – Best Marketing Agency. Call, WhatsApp, or email us directly. Our strategy team responds within 2 hours on working days.',
};

const contactDetails = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Call Us',
    value: '+91 85869 89832',
    href: 'tel:+918586989832',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WhatsApp',
    value: '+91 85869 89832',
    href: 'https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services',
    target: '_blank',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email Us',
    value: 'contact.digitaldigix@gmail.com',
    href: 'mailto:contact.digitaldigix@gmail.com',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Head Office',
    value: 'BMA – Best Marketing Agency, Delhi NCR, India',
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    href: null,
  },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { service?: string };
}) {
  return (
    <div className="py-16 sm:py-24 bg-brand-bg space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-600">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Tell us about your project and our strategy experts will get back to you within 24 hours.
            WhatsApp us directly for an instant response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card rounded-3xl p-8 border border-brand-border space-y-5">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Direct Contact Hub</h2>

              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-terracotta-600 shadow-warm-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.target ?? '_self'}
                        rel="noopener noreferrer"
                        className="font-semibold text-stone-900 hover:text-terracotta-600 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-stone-900">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Fast Response Guarantee */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-warm-sm space-y-2">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                ⚡ 2-Hour Response Guarantee
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We respond to all qualified business inquiries within 2 hours during operational
                business days (Mon – Sat, 9AM – 7PM). WhatsApp us for instant assistance.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Right: Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={searchParams?.service} />
          </div>

        </div>
      </div>
    </div>
  );
}
