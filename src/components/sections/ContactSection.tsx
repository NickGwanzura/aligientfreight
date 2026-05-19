"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowRight,
  Package,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const services = [
  "Air Freight",
  "Ocean Freight",
  "Road Freight",
  "Customs Clearance",
  "Project Cargo",
  "Cold Chain",
  "Trade Finance",
  "Corridor Management",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50 hidden lg:block" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-neutral-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-heading font-bold text-black leading-tight mb-6"
            >
              Let&apos;s Engineer Your Next Shipment
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-neutral-600 text-lg leading-relaxed mb-10"
            >
              Speak with a logistics specialist about your freight requirements,
              corridor needs, or trade finance inquiries.
            </motion.p>

            {/* Contact details */}
            <motion.div variants={itemVariants} className="space-y-5 mb-10">
              <a
                href="tel:+263XXXXXXXXX"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Phone</p>
                  <p className="text-black font-semibold group-hover:text-neutral-700 transition-colors">
                    +263 XX XXX XXXX
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@agilentfreight.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Email</p>
                  <p className="text-black font-semibold group-hover:text-neutral-700 transition-colors">
                    info@agilentfreight.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Location</p>
                  <p className="text-black font-semibold">3 Dale Road Malborough, Harare, Zimbabwe</p>
                </div>
              </div>
              <a
                href="https://wa.me/263XXXXXXXXX"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-black font-semibold group-hover:text-green-600 transition-colors">
                    +263 XX XXX XXXX
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Quick actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-neutral-800 text-white font-semibold rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                Request Quote
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 hover:border-neutral-400 text-black font-semibold rounded-lg transition-colors bg-white">
                <Package className="w-4 h-4" />
                Track Shipment
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="bg-white lg:bg-transparent"
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl shadow-neutral-200/50 p-8 lg:p-10 border border-neutral-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black placeholder:text-neutral-400 bg-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black placeholder:text-neutral-400 bg-white"
                    placeholder="Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black placeholder:text-neutral-400 bg-white"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black placeholder:text-neutral-400 bg-white"
                    placeholder="+263 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-black mb-1.5">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-black mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-all text-black placeholder:text-neutral-400 resize-none bg-white"
                  placeholder="Tell us about your shipment requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Submit Inquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Map card */}
            <motion.div
              variants={itemVariants}
              className="mt-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-black"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-heading font-semibold">Our Headquarters</p>
                  <p className="text-neutral-500 text-sm">3 Dale Road Malborough, Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="h-32 bg-neutral-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
                  <p className="text-neutral-500 text-sm">Interactive Map</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
