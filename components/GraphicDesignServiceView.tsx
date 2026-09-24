'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  Palette, 
  Sparkles, 
  Clock, 
  Layers, 
  CheckCircle2, 
  MessageCircle,
  FileCheck
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

const GRAPHIC_CATEGORIES = [
  {
    title: 'Standard Creatives — ₹200 each',
    subtitle: 'Single-page social & digital formats.',
    items: [
      { name: 'Poster Design', price: '₹200' },
      { name: 'Flyer Design', price: '₹200' },
      { name: 'Pamphlet Design', price: '₹200' },
      { name: 'Leaflet Design', price: '₹200' },
      { name: 'Social Media Post Design', price: '₹200' },
      { name: 'Festival Post Design', price: '₹200' },
      { name: 'Promotional Post Design', price: '₹200' },
      { name: 'Product Post Design', price: '₹200' },
      { name: 'Offer Post Design', price: '₹200' },
      { name: 'Event Poster Design', price: '₹200' },
      { name: 'School Admission Creative', price: '₹200' },
      { name: 'Food Promotion Poster', price: '₹200' },
      { name: 'Meta Ad Creative', price: '₹200' },
      { name: 'Google Display Ad', price: '₹200' },
      { name: 'Google Banner Ad', price: '₹200' },
      { name: 'WhatsApp Marketing Creative', price: '₹200' },
      { name: 'App Promotion Creative', price: '₹200' },
    ],
  },
  {
    title: 'Structured Designs — ₹340 each',
    subtitle: 'Layout complexity — cards, certificates, menus.',
    items: [
      { name: 'Visiting Card Design', price: '₹340' },
      { name: 'Letterhead Design', price: '₹340' },
      { name: 'ID Card Design', price: '₹340' },
      { name: 'Certificate Design', price: '₹340' },
      { name: 'Quotation Design', price: '₹340' },
      { name: 'Carousel Design', price: '₹340' },
      { name: 'Menu Card Design', price: '₹340' },
      { name: 'YouTube Banner Design', price: '₹340' },
      { name: 'Event Invitation Design', price: '₹340' },
    ],
  },
  {
    title: 'Multi-Page Documents — ₹130 / page',
    subtitle: 'Billed per page or per slide.',
    items: [
      { name: 'PPT / Presentation Design', price: '₹130/slide' },
      { name: 'Investor Pitch Deck', price: '₹130/slide' },
      { name: 'Sales Presentation', price: '₹130/slide' },
      { name: 'Business Proposal Design', price: '₹130/slide' },
      { name: 'Training Presentation', price: '₹130/slide' },
      { name: 'Catalogue Design', price: '₹130/page' },
      { name: 'School Magazine Design', price: '₹130/page' },
      { name: 'Prospectus Design', price: '₹130/page' },
      { name: 'Annual Report Design', price: 'Custom Quote' },
    ],
  },
  {
    title: 'Large-Format & Branding — ₹499+',
    subtitle: 'Outdoor, packaging & corporate identity.',
    items: [
      { name: 'Standee Design', price: '₹649' },
      { name: 'Flex Banner Design', price: '₹649' },
      { name: 'Roll-Up Banner Design', price: '₹649' },
      { name: 'Hoarding Design', price: '₹1,149' },
      { name: 'Billboard Design', price: '₹1,149' },
      { name: 'Shop Branding Design', price: '₹1,649 onwards' },
      { name: 'Vehicle Branding Design', price: '₹1,149 onwards' },
      { name: 'Wall Branding Design', price: '₹1,149 onwards' },
      { name: 'Product Packaging Design', price: '₹1,649' },
      { name: 'Box Packaging Design', price: '₹2,149' },
      { name: 'Company Profile Design', price: '₹1,999 onwards' },
      { name: 'Brand Guidelines', price: '₹2,999 onwards' },
      { name: 'Logo Design', price: '₹850 – ₹3,500' },
    ],
  },
  {
    title: 'Packaging & Product Design',
    subtitle: 'Custom commercial packaging layouts.',
    items: [
      { name: 'Product Label Design', price: '₹649' },
      { name: 'Product Tag Design', price: '₹430' },
      { name: 'Shopping Bag Design', price: '₹649' },
      { name: 'Product Mockup Design', price: '₹430' },
    ],
  },
  {
    title: 'Restaurant & Hospitality',
    subtitle: 'Branding materials for dining and hotels.',
    items: [
      { name: 'Restaurant Menu Design', price: '₹649' },
      { name: 'Room Service Menu Design', price: '₹649' },
      { name: 'Hotel Brochure Design', price: '₹1,149' },
      { name: 'Tent Card Design', price: '₹430' },
    ],
  },
  {
    title: 'Custom & Creative Services',
    subtitle: 'Tailored creative illustrations and retouching.',
    items: [
      { name: 'Infographic Design', price: '₹649' },
      { name: 'Vector Tracing', price: '₹649' },
      { name: 'Photo Retouching', price: '₹430' },
      { name: 'Photo Manipulation', price: '₹649' },
      { name: 'AI Image Enhancement', price: '₹200' },
      { name: 'Merchandise Design', price: '₹649' },
      { name: 'T-Shirt Design', price: '₹649' },
      { name: 'Landing Page Graphics', price: '₹649' },
      { name: 'Custom Illustration', price: 'Custom Quote' },
      { name: 'Custom Artwork', price: 'Custom Quote' },
    ],
  },
];

const WHAT_WE_DO = [
  'Custom Social Media Posts, Stories & Ad Creatives',
  'Corporate Pitch Decks, Sales Brochures & Banners',
  'Product Packaging, Labels & Retail Display Designs',
  '3D Product Mockups & Large-Format Flex Printing Assets',
  'Infographic Layouts, Ebook Design & Custom Illustrations',
  'Corporate Stationary, Letterheads & Invoice Design Templates',
];

const DELIVERABLES = [
  'High-Res PNG/JPEG Files (Web Optimized)',
  'Print-Ready PDF (CMYK 300 DPI)',
  'Editable Vector Source Files (AI / PSD / Figma)',
  'Brand Color Palette & Typography Guide',
  'Fonts & Typography Assets Package',
];

const GRAPHIC_FAQS = [
  {
    q: 'How is graphic design priced?',
    a: 'We offer transparent per-design pricing. Standard formats are ₹200, structured designs are ₹340, and multi-page layouts are ₹130/page. No retainers or hidden fees.',
  },
  {
    q: 'Do you offer logo design?',
    a: 'Yes, we design professional, vector logos starting from ₹850 up to ₹3,500 depending on concepts and design drafts required.',
  },
  {
    q: 'How fast is delivery?',
    a: 'Standard social posts and ad creatives take 24–48 hours. Complex brochures, packaging layouts or multi-page pitch decks take 48–72 hours.',
  },
  {
    q: 'Do prices include revisions and final files?',
    a: 'Yes, all prices include minor revisions to ensure you are happy, and you receive print-ready PDFs as well as editable source files (AI/PSD).',
  },
];

export function GraphicDesignServiceView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ── Breadcrumb & Back Link ────────────────────────────── */}
        <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-semibold">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-500">
            <Link href="/" className="hover:text-terracotta-700">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-terracotta-700">Services</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Graphic Design</span>
          </nav>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-400 shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse All Services</span>
          </Link>
        </div>

        {/* ── Hero Service Card ─────────────────────────────────── */}
        <header className="bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-[#E7E0D6] shadow-warm-md relative overflow-hidden space-y-6">
          <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta-700 via-amber-500 to-terracotta-500" />
          
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              DESIGN &amp; BRANDING
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center text-4xl sm:text-5xl shadow-inner shrink-0">
                🎨
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                  Graphic Design Services
                </h1>
                <p className="text-xs font-bold text-stone-400 mt-1 uppercase tracking-wider">
                  Social Posts • Packaging • Brochures • Presentations • Logos
                </p>
              </div>
            </div>

            <div className="bg-[#FAF4ED] p-4 sm:p-5 rounded-2xl border border-terracotta-200 text-left md:text-right shrink-0">
              <span className="text-[11px] uppercase font-bold text-stone-500 block">Transparent Per-Design Pricing</span>
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-terracotta-700 mt-0.5 block">
                ₹200 onwards
              </span>
              <span className="text-[10px] text-stone-400 font-semibold block mt-1">Pay Per Design • Zero Retainer</span>
            </div>
          </div>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Premium, custom visual assets tailored for B2B and D2C brands. We design social media ad creatives, corporate pitch decks, sales brochures, packaging labels, retail banners, and 3D product mockups with transparent, per-design pricing and ultra-fast 24-hour turnaround times.
          </p>

          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20Graphic%20Design%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-md hover:shadow-warm-lg group"
            >
              <svg
                className="w-5 h-5 fill-white transition-transform group-hover:scale-110"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>Chat on WhatsApp 💬</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <span>Request Custom Proposal →</span>
            </Link>
          </div>
        </header>

        {/* ── GRAPHIC DESIGN PRICING CARDS SECTION (7 CATEGORIES) ── */}
        <section aria-labelledby="pricing-list-heading" className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                TRANSPARENT PRICING
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="pricing-list-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Graphic Design Price List
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {GRAPHIC_CATEGORIES.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-3xl border-t-4 border-t-terracotta-600 border border-stone-200 shadow-warm-sm p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 mb-4 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-100 pt-3 max-h-80 overflow-y-auto pr-1">
                    {cat.items.map((item, iIdx) => {
                      const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                      return (
                        <div
                          key={iIdx}
                          className="flex items-center justify-between py-1.5 px-2 rounded-lg text-xs hover:bg-[#FAF4ED] transition-colors group"
                        >
                          <Link
                            href={`/graphic-design/${itemSlug}`}
                            className="font-medium text-stone-700 group-hover:text-terracotta-700 hover:underline line-clamp-1 flex-1 mr-2 text-left"
                            title={`View specifications & details for ${item.name}`}
                          >
                            {item.name}
                          </Link>
                          <div className="flex items-center gap-2 shrink-0">
                            <Link
                              href={`/graphic-design/${itemSlug}`}
                              className="font-bold text-terracotta-700 hover:text-stone-900 transition-colors"
                            >
                              {item.price}
                            </Link>
                            <a
                              href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I am interested in ${item.name} (${item.price})`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-stone-400 hover:text-[#25D366] transition-colors p-0.5"
                              title={`Instant order for ${item.name} on WhatsApp`}
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100">
                  <a
                    href={`https://wa.me/918586989832?text=${encodeURIComponent(`Hi, I would like to order design from: ${cat.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-stone-100 hover:bg-[#25D366] hover:text-white text-stone-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXECUTION & STRATEGY INFO BLOCKS ─────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-warm-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta-600">
              <Palette className="w-4 h-4" />
              <span>—— Our Approach</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.
            </p>
          </div>

          <div className="bg-stone-900 rounded-3xl p-8 text-white shadow-warm-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Clock className="w-4 h-4" />
              <span>—— Typical Results</span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.
            </p>
          </div>
        </section>

        {/* ── SERVICES CARD: WHAT WE DO & DELIVERABLES BREAKDOWN ── */}
        <section aria-labelledby="services-card-heading" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                DELIVERABLES ARCHITECTURE
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="services-card-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Everything Included in Graphic Design
            </h2>
            <p className="text-stone-500 text-sm sm:text-base">
              Every asset is engineered for brand consistency, high print clarity, and digital conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Do Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center text-terracotta-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Formats &amp; Assets We Design</h3>
                  <p className="text-xs text-stone-500">From digital campaigns to retail print architecture</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {WHAT_WE_DO.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-snug">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Standard Delivery Package</h3>
                  <p className="text-xs text-stone-500">Every design file delivered ready-to-use</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {DELIVERABLES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-snug">
                    <Check className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="text-xs font-bold text-stone-900">File Integrity Guarantee:</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  All digital assets are color-calibrated (RGB for screens, CMYK for offset &amp; flex printing), ensuring your brand looks identical across all media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING & PROCESS FAQS ACCORDION ────────────────── */}
        <section aria-labelledby="faqs-heading" className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-terracotta-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                QUESTIONS &amp; CLARIFICATIONS
              </span>
              <span className="w-8 h-px bg-terracotta-600" />
            </div>
            <h2 id="faqs-heading" className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Graphic Design FAQs
            </h2>
            <p className="text-stone-500 text-sm">
              Answers about file formats, turnaround times, and bulk orders.
            </p>
          </div>

          <div className="space-y-3.5">
            {GRAPHIC_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-warm-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-terracotta-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-xl font-mono transition-transform duration-200 shrink-0 text-stone-400 ${
                      isOpen ? 'rotate-45 text-terracotta-600' : ''
                    }`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ─────────────────────────────────── */}
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            Need High-Impact Designs Today?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Send your design requirements or text draft on WhatsApp and receive print-ready creatives within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20have%20a%20Graphic%20Design%20requirement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-warm-md hover:shadow-warm-lg group"
            >
              <svg
                className="w-5 h-5 fill-white transition-transform group-hover:scale-110"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>Order Designs on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-stone-100 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <span>Contact Design Team →</span>
            </Link>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
