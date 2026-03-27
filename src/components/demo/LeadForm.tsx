"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  "HVAC Diagnostic ($89)",
  "Heating & Air Maintenance ($99)",
  "System Replacement – Second Opinion (Free)",
  "Real Estate HVAC Inspection ($178)",
  "Other / Not Sure",
];

interface LeadFormProps {
  bookingCTA: string;
  phone: string;
  phoneHref: string;
}

export default function LeadForm({ bookingCTA, phone, phoneHref }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Request Received!
        </h3>
        <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
          Thank you for reaching out. We&apos;ll follow up shortly to confirm
          your appointment.
        </p>
        <p className="text-sm text-slate-500">
          Or call us directly:{" "}
          <a href={phoneHref} className="font-semibold text-blue-700 hover:underline">
            {phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="formPhone" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="formPhone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(704) 555-0100"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white appearance-none"
        >
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5">
          Message or Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your issue or any questions you have..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {bookingCTA}
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        Or call us directly:{" "}
        <a href={phoneHref} className="text-blue-600 font-semibold hover:underline">
          {phone}
        </a>
      </p>
    </form>
  );
}
