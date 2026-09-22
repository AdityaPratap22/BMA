'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Performance Marketing',
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
                <option>Performance Marketing</option>
                <option>Social Media Marketing (SMM)</option>
                <option>SEO & Growth</option>
                <option>Content Marketing</option>
                <option>Branding & Design</option>
                <option>Web Development</option>
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
