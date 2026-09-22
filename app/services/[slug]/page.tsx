import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { CtaBanner } from '@/components/CtaBanner';
import { Check, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | BMA – Best Marketing Agency`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="py-16 sm:py-24 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Breadcrumb */}
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-terracotta-600 font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Hero */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-warm-sm p-10 space-y-4 relative overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-700 via-amber-500 to-terracotta-500" />
          <div className="text-5xl">{service.emoji}</div>
          <h1 className="text-4xl font-serif font-bold text-stone-900">{service.title}</h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">{service.shortDesc}</p>
          <div className="flex items-center gap-4 flex-wrap pt-2">
            <div className="font-extrabold text-2xl bg-gradient-to-r from-terracotta-700 via-amber-600 to-terracotta-500 bg-clip-text text-transparent">
              {service.price}
            </div>
            {service.badgeText && (
              <span className="bg-terracotta-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {service.badgeText}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Deliverables */}
          <div className="bg-brand-card rounded-3xl p-8 border border-brand-border space-y-5">
            <h2 className="text-xl font-serif font-bold text-stone-900">What&apos;s Included</h2>
            <ul className="space-y-3">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                  <Check className="w-4 h-4 text-terracotta-600 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {service.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-warm-sm space-y-1">
                <h3 className="font-serif font-bold text-stone-900">{f.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-terracotta-600 rounded-3xl p-10 text-center text-white space-y-4">
          <h2 className="text-2xl font-serif font-bold">Ready to get started with {service.title}?</h2>
          <p className="opacity-90 text-base">No lock-in contracts. Zero hidden fees. Get in touch and we&apos;ll build a plan around your goals.</p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/contact" className="bg-white text-terracotta-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-stone-100 transition-colors">
              Start a Project →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Other Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Explore Other Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="bg-white rounded-2xl p-4 border border-stone-200 shadow-warm-sm hover:-translate-y-0.5 transition-transform duration-200 space-y-1"
              >
                <div className="text-xl">{s.emoji}</div>
                <div className="text-sm font-serif font-bold text-stone-900 leading-snug">{s.title}</div>
                <div className="text-xs font-bold text-terracotta-600">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
