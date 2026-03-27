"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, User, MapPin, MessageSquare, Clock, AlertCircle } from "lucide-react";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

const serviceOptions = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Heating Installation",
  "Heat Pump Service",
  "Preventive Maintenance",
  "Indoor Air Quality",
  "Home Energy Audit",
  "Commercial HVAC",
  "Other / Not Sure",
];

const urgencyOptions = [
  { value: "emergency", label: "Emergency — System is down now" },
  { value: "urgent", label: "Urgent — Within 24–48 hours" },
  { value: "soon", label: "Soon — Within this week" },
  { value: "scheduled", label: "Scheduling ahead — No rush" },
];

export default function ACCContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    urgency: "",
    contactMethod: "phone",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.service) e.service = "Please select a service";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    router.push(`${BASE}/thank-you`);
  };

  const inputClass = (field: string) =>
    `w-full bg-zinc-800 border ${errors[field] ? "border-red-500/60" : "border-zinc-700"} rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors`;

  const labelClass = "block text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> Full Name *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass("name")}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> Phone Number *</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(704) 000-0000"
            className={inputClass("phone")}
            aria-required="true"
          />
          {errors.phone && <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> Email Address *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass("email")}
            aria-required="true"
          />
          {errors.email && <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className={labelClass}>
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Your City</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Indian Trail, Charlotte"
            className={inputClass("city")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>Service Needed *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass("service") + " cursor-pointer"}
            aria-required="true"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service}</p>}
        </div>

        {/* Urgency */}
        <div>
          <label htmlFor="urgency" className={labelClass}>
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> How Urgent?</span>
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className={inputClass("urgency") + " cursor-pointer"}
          >
            <option value="">Select urgency level...</option>
            {urgencyOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred contact method */}
      <div>
        <p className={labelClass}>Preferred Contact Method</p>
        <div className="flex gap-3">
          {["phone", "email", "either"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleChange}
                className="w-4 h-4 accent-amber-500"
              />
              <span className="text-zinc-300 text-sm capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          <span className="flex items-center gap-1.5"><MessageSquare className="w-3 h-3" /> Message or Description</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your issue, question, or request..."
          className={inputClass("message") + " resize-none"}
        />
      </div>

      {/* Emergency note */}
      {formData.urgency === "emergency" && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm">
            For emergencies, please <strong>call us directly</strong> at{" "}
            <a href={COMPANY.phoneHref} className="underline font-bold hover:text-red-200">
              {COMPANY.phone}
            </a>{" "}
            for the fastest response.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 py-4 rounded-lg text-sm font-bold transition-all duration-200"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </button>

      <p className="text-zinc-600 text-xs text-center">
        We typically respond within a few hours during business hours. For urgent service, call{" "}
        <a href={COMPANY.phoneHref} className="text-zinc-500 hover:text-zinc-400 transition-colors">{COMPANY.phone}</a>.
      </p>
    </form>
  );
}
