'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
}

function resolveInitialService(input?: string): string {
  if (!input) return 'Performance Marketing (Google & Meta Ads)';
  const lower = input.toLowerCase().replace(/[-_]/g, ' ');
  if (lower.includes('google')) return 'Google Ads Management (Search, PMax & YouTube)';
  if (lower.includes('meta') || lower.includes('facebook') || lower.includes('instagram')) return 'Meta Ads Management (Facebook & Instagram)';
  if (lower.includes('smm') || lower.includes('social')) return 'Social Media Marketing (SMM)';
  if (lower.includes('local seo')) return 'Local SEO & Google Maps Optimization';
  if (lower.includes('seo')) return 'SEO Services (Search Engine Optimization)';
  if (lower.includes('reels') || lower.includes('video')) return 'Reels & Short-Form Video Production';
  if (lower.includes('ugc')) return 'UGC Reels & Creator Marketing';
  if (lower.includes('whatsapp')) return 'WhatsApp Marketing & Automation';
  if (lower.includes('poster')) return 'Poster Design & Festival Creatives';
  if (lower.includes('graphic')) return 'Graphic Design (Social, Packaging & Print)';
  if (lower.includes('logo') || lower.includes('branding')) return 'Logo & Brand Identity Design';
  if (lower.includes('web') || lower.includes('website')) return 'Website Development (Next.js & React)';
  if (lower.includes('dashboard') || lower.includes('kpi')) return 'Dashboard & KPI Management (Looker Studio)';
  if (lower.includes('crm')) return 'CRM Setup & Workflow Automation';
  if (lower.includes('lead')) return 'Lead Generation (Pay-Per-Performance)';
  if (lower.includes('ecommerce') || lower.includes('e commerce')) return 'E-commerce Marketing & Shopping Ads';
  if (lower.includes('content')) return 'Content Marketing & Thought Leadership';
  return input;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: resolveInitialService(initialService),
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      // Fallback submission simulation
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-brand-border p-8 sm:p-10 shadow-warm-md">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">Message Received!</h3>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            Thank you for reaching out to BMA (Best Marketing Agency). One of our growth strategists will review your project details and get back to you within 2 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-terracotta-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-terracotta-700"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Rohit Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-terracotta-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                placeholder="rohit@brand.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-terracotta-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-terracotta-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">Primary Service Interested In</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-terracotta-600"
              >
                <optgroup label="── Full-Funnel Growth Suites ──">
                  <option value="Full-Suite Digital Marketing Architecture">Full-Suite Digital Marketing Architecture</option>
                  <option value="Social Media Marketing (SMM)">Social Media Marketing (₹5,999–₹11,999/mo)</option>
                  <option value="Performance Marketing (Google & Meta Ads)">Performance Marketing (Google &amp; Meta Ads)</option>
                </optgroup>

                <optgroup label="── Paid Advertising & Growth ──">
                  <option value="Google Ads Management (Search, PMax & YouTube)">Google Ads Management (18% of Ad Spend)</option>
                  <option value="Meta Ads Management (Facebook & Instagram)">Meta Ads Management (15% of Ad Spend)</option>
                  <option value="B2B Lead Generation (Pay-Per-Performance)">B2B Lead Generation (Custom / Pay-per-lead)</option>
                  <option value="E-commerce Scaling & Shopping Ads">E-commerce Scaling (₹8,000–₹20,000/mo)</option>
                  <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (₹5,000–₹15,000/audit)</option>
                </optgroup>

                <optgroup label="── Organic Search & SEO ──">
                  <option value="SEO Services (Search Engine Optimization)">SEO Services (₹4,000–₹12,000/mo)</option>
                  <option value="Local SEO & Google Maps Optimization">Local Business SEO (₹3,500–₹9,000/mo)</option>
                </optgroup>

                <optgroup label="── Social Media, Creators & Direct ──">
                  <option value="UGC Reels & Creator Marketing">UGC Reels &amp; Creator Marketing (₹2,100–₹5,100/campaign)</option>
                  <option value="Influencer Marketing Campaigns">Influencer Marketing (₹15,000–₹50,000/campaign)</option>
                  <option value="WhatsApp Marketing & Automation">WhatsApp Marketing (₹2,500–₹6,000/mo)</option>
                  <option value="Email Marketing Funnels & Automation">Email Marketing Funnels (₹4,500–₹12,000/mo)</option>
                </optgroup>

                <optgroup label="── Creative Design & Branding ──">
                  <option value="Graphic Design (Social, Packaging & Print)">Graphic Design (₹200 onwards)</option>
                  <option value="Brand Identity & Logo Design">Brand Identity Design (₹850–₹3,500)</option>
                </optgroup>

                <optgroup label="── Tech, Web & AI Systems ──">
                  <option value="Website Development (Next.js & React)">Website Development (₹6,500–₹18,000)</option>
                  <option value="Dashboard & KPI Management (Looker Studio)">Dashboard &amp; KPI Systems (₹2,000–₹15,000)</option>
                  <option value="AI Automation Systems & Custom Agents">AI Automation Systems (₹5,000–₹25,000)</option>
                </optgroup>

                <optgroup label="── Custom & Other ──">
                  <option value="Custom Multi-Channel Growth Package">Custom Multi-Channel Growth Package</option>
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-2">Project Overview & Goals</label>
            <textarea
              rows={4}
              placeholder="Tell us about your current monthly revenue, ad spend, target markets, or specific challenges..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-terracotta-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-base transition-colors shadow-warm-md flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span>Send Message & Get Strategy Proposal</span>
          </button>
        </form>
      )}
    </div>
  );
};
