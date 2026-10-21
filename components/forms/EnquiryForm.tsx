"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CheckCircle2, AlertCircle, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { enquiryValidationSchema, EnquiryFormValues } from "@/lib/validation";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface EnquiryFormProps {
  defaultProject?: string;
  source?: string;
  className?: string;
}

export default function EnquiryForm({
  defaultProject = "General Enquiry",
  source = "Website",
  className = "",
}: EnquiryFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const initialValues: EnquiryFormValues = {
    fullName: "",
    phone: "",
    email: "",
    projectInterest: defaultProject,
    preferredContact: "WhatsApp",
    message: "",
    privacyConsent: true,
  };

  const projectOptions = [
    { label: "General Enquiry", value: "General Enquiry" },
    ...projects.map((p) => ({
      label: `${p.name} ${p.acreageDisplay ? `(${p.acreageDisplay})` : ""}`,
      value: p.name,
    })),
  ];

  const handleSubmit = async (
    values: EnquiryFormValues,
    { resetForm, setSubmitting }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setSubmitStatus("idle");

      // Construct a clean, structured WhatsApp message for VBR Developers
      const messageText = 
`*New Enquiry - VBR Developers*
------------------------------
*Name:* ${values.fullName}
*Phone:* +91 ${values.phone}
${values.email ? `*Email:* ${values.email}\n` : ""}*Project:* ${values.projectInterest}
*Preferred Contact:* ${values.preferredContact}
${values.message ? `*Message:* ${values.message}\n` : ""}*Source:* ${source}
------------------------------
_Sent via VBR Developers Website Form_`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;

      // Also log to backend API for record keeping
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      }).catch((err) => console.log("Background log error:", err));

      setSubmitStatus("success");

      // Open WhatsApp chat in a new tab/window
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      resetForm();
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Could not launch WhatsApp. Please click the direct WhatsApp button below or call us."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-lg ${className}`}
    >
      <div className="mb-6">
        <h3 className="font-heading font-extrabold text-2xl text-brand-midnight">
          Enquire About Residential Plots
        </h3>
        <p className="mt-2 text-sm text-brand-muted leading-relaxed">
          Fill out your details to send your enquiry directly to VBR Developers on WhatsApp for instant assistance.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-brand-green-light border border-brand-green/30 text-brand-green-dark flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-green" />
          <div className="text-sm">
            <p className="font-bold">Opening WhatsApp Chat...</p>
            <p className="mt-1">
              Your enquiry has been formatted and opened in WhatsApp. If it didn&apos;t open automatically, you can also reach us directly at <strong>{siteConfig.displayPhone}</strong>.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <div className="text-sm">
            <p className="font-bold">Unable to process enquiry</p>
            <p className="mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={enquiryValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Full Name <span className="text-brand-orange">*</span>
              </label>
              <Field
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Ramesh Kumar"
                className={`w-full px-4 py-3 text-sm rounded-lg border bg-brand-ivory/50 focus:bg-white text-brand-midnight focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName && touched.fullName
                    ? "border-red-400 focus:ring-red-300"
                    : "border-brand-border focus:ring-brand-orange"
                }`}
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Mobile Number <span className="text-brand-orange">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-bold text-slate-500">
                  +91
                </div>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={10}
                  placeholder="9876543210"
                  className={`w-full pl-12 pr-4 py-3 text-sm rounded-lg border bg-brand-ivory/50 focus:bg-white text-brand-midnight focus:outline-none focus:ring-2 transition-all ${
                    errors.phone && touched.phone
                      ? "border-red-400 focus:ring-red-300"
                      : "border-brand-border focus:ring-brand-orange"
                  }`}
                />
              </div>
              <ErrorMessage
                name="phone"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className={`w-full px-4 py-3 text-sm rounded-lg border bg-brand-ivory/50 focus:bg-white text-brand-midnight focus:outline-none focus:ring-2 transition-all ${
                  errors.email && touched.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-brand-border focus:ring-brand-orange"
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Project Selection */}
            <div>
              <label
                htmlFor="projectInterest"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Project of Interest <span className="text-brand-orange">*</span>
              </label>
              <Field
                as="select"
                id="projectInterest"
                name="projectInterest"
                className={`w-full px-4 py-3 text-sm rounded-lg border bg-brand-ivory/50 focus:bg-white text-brand-midnight focus:outline-none focus:ring-2 transition-all ${
                  errors.projectInterest && touched.projectInterest
                    ? "border-red-400 focus:ring-red-300"
                    : "border-brand-border focus:ring-brand-orange"
                }`}
              >
                {projectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="projectInterest"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label
                htmlFor="preferredContact"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Phone Call", "WhatsApp", "Email"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-brand-border bg-brand-ivory/40 hover:bg-white cursor-pointer text-xs font-medium text-brand-midnight has-[:checked]:border-brand-orange has-[:checked]:bg-brand-orange-light has-[:checked]:text-brand-orange transition-all"
                  >
                    <Field
                      type="radio"
                      name="preferredContact"
                      value={method}
                      className="sr-only"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5"
              >
                Message or Query <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={3}
                placeholder="Ask about plot dimensions, location road connectivity, or layout visits..."
                className="w-full px-4 py-3 text-sm rounded-lg border border-brand-border bg-brand-ivory/50 focus:bg-white text-brand-midnight focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-brand-muted">
                <Field
                  type="checkbox"
                  name="privacyConsent"
                  className="mt-0.5 rounded border-brand-border text-brand-orange focus:ring-brand-orange"
                />
                <span>
                  I agree to be contacted by VBR Developers regarding my property
                  enquiry. Your information is kept strictly confidential.
                </span>
              </label>
              <ErrorMessage
                name="privacyConsent"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center text-base bg-[#25D366] hover:bg-[#20ba59] border-none text-white shadow-md hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <FaWhatsapp className="w-5 h-5 text-white" />
                    <span>Send Enquiry on WhatsApp</span>
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>We value your privacy. No spam.</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
