"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Clock, Mail, Phone, MapPin, Briefcase, Headphones, User, Loader2 } from "lucide-react";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/GradientOrb";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "UI/UX Design & Product Strategy",
  "Custom Software Development",
  "SaaS Platform Development",
  "E-Commerce Solutions",
  "Digital Transformation Consulting",
  "Mobile App Development",
  "Digital Marketing & Growth",
  "Video Editing & Production",
];

const budgetRanges = [
  "Under PKR 10,000",
  "PKR 10,000 – PKR 25,000",
  "PKR 25,000 – PKR 50,000",
  "PKR 50,000 – PKR 100,000",
  "PKR 100,000+",
  "Not sure yet",
];

const contactReasons = [
  {
    icon: Briefcase,
    title: "Sales",
    description: "Interested in our services or products? Let's talk.",
    email: "sales@galaxydev.pk",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Need help with an existing project or product?",
    email: "support@galaxydev.pk",
  },
  {
    icon: User,
    title: "Careers",
    description: "Want to join the team? We're always looking for talent.",
    email: "careers@galaxydev.pk",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_NOTIFY_API_URL || "http://localhost:4000/api/notify",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "X-API-Key":
              process.env.NEXT_PUBLIC_NOTIFY_API_KEY || "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            channels: ["email"],
            email: {
              emailSendId:
                process.env.NEXT_PUBLIC_EMAIL_SEND_ID || "no-reply@galaxydev.pk",
              to: ["masadnazir1@gmail.com"],
              subject: "New Contact Form Submission — GalaxyDev",
              body: `<h1>New Inquiry</h1><p>From: ${data.fullName}</p>`,
              templateId: "send-project-galaxydev",
              templateVars: {
                fullName: data.fullName,
                email: data.email,
                company: data.company,
                service: data.service,
                budgetRange: data.budget || "Not specified",
                message: data.message,
              },
            },
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setSubmitError(false);
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 bg-bg-primary">
        <GradientOrb color="blue" size="md" position="top-left" />
        <GradientOrb color="purple" size="md" position="bottom-right" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary font-medium">Contact</span>
          </nav>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-primary mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form and we&apos;ll
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-bg-card border border-border-default rounded-md p-10 shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="font-display font-semibold text-2xl text-text-primary mb-2">
                    Message Sent!
                  </h2>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We&apos;ll review your message and get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-bg-card border border-border-default rounded-md p-6 md:p-8 shadow-sm"
                  noValidate
                >
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        {...register("fullName")}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                        Company <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        placeholder="Company Inc."
                        className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
                        Service Interested In <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-1.5">
                      Budget Range (optional)
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full px-4 py-2.5 bg-bg-secondary border border-border-default rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue via-purple to-magenta text-white font-semibold rounded-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-text-primary">Email</h3>
                    <a href="mailto:info@galaxydev.pk" className="text-sm text-text-secondary hover:text-blue transition-colors">
                      info@galaxydev.pk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-text-primary">Phone</h3>
                    <a href="tel:+923408882796" className="text-sm text-text-secondary hover:text-blue transition-colors">
                      +92 340 8882796
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-text-primary">Location</h3>
                    <p className="text-sm text-text-secondary">Lahore, Pakistan · Muzaffarabad, AJK</p>
                    <p className="text-xs text-text-muted mt-0.5">Remote-First Team</p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-card border border-border-default rounded-md p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                  <Clock size={16} className="text-blue" />
                  <span className="font-medium text-text-primary">We respond within 24 hours</span>
                </div>
                <p className="text-xs text-text-muted">
                  Monday – Friday, 9:00 AM – 6:00 PM PKT
                </p>
              </div>

              {contactReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="bg-bg-card border border-border-default rounded-md p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue/20 via-purple/20 to-magenta/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-text-primary">{reason.title}</h3>
                        <p className="text-xs text-text-muted mt-0.5 mb-1">{reason.description}</p>
                        <a
                          href={`mailto:${reason.email}`}
                          className="text-xs font-medium text-blue hover:underline"
                        >
                          {reason.email}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-md overflow-hidden border border-border-default">
                <div className="aspect-[4/3] bg-bg-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-10 h-10 text-text-muted mx-auto mb-2" />
                    <p className="text-sm text-text-muted">Lahore, Pakistan · Muzaffarabad, AJK</p>
                    <p className="text-xs text-text-muted mt-1">Remote-First Team — We work from where we thrive.</p>
                    <a
                      href="https://maps.google.com/?q=Lahore+Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue hover:underline mt-2 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
