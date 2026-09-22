'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Calendar } from 'lucide-react';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    budget: '₹50k - ₹1L',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden relative p-8">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-700 bg-cream-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Strategy Call Requested!
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Our growth experts will analyze your digital footprint and reach out within 2 hours to confirm your 30-minute consultation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-terracotta-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-terracotta-700"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta-100 text-terracotta-700 rounded-full text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                Free 30-Min Strategy Call
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Let's scale your revenue together
              </h3>
              <p className="text-xs text-stone-500">
                No long-term contracts. Get a customized growth audit & ad funnel breakdown.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Rohit Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-stone-300 text-sm focus:outline-none focus:border-terracotta-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="rohit@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-stone-300 text-sm focus:outline-none focus:border-terracotta-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-stone-300 text-sm focus:outline-none focus:border-terracotta-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Monthly Marketing Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-stone-300 text-sm focus:outline-none focus:border-terracotta-600"
                  >
                    <option>₹50k - ₹1L</option>
                    <option>₹1L - ₹5L</option>
                    <option>₹5L - ₹25L</option>
                    <option>₹25L+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Website URL or Business Goal</label>
                <input
                  type="text"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-stone-300 text-sm focus:outline-none focus:border-terracotta-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm transition-colors shadow-warm-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Confirm Strategy Session</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
