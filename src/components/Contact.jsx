// Enhanced Contact.jsx with EmailJS integration
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span
          className={`text-xs uppercase tracking-widest text-[#C1272D] font-semibold transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Get In Touch
        </span>
        <h2
          className={`text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4 transition-all duration-700 delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Contact & Enquiries
        </h2>
        <p
          className={`text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-300 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          For business enquiries, partnerships, logistics support, telecom
          services, supplies or general questions, please reach out using the
          details below.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div className="space-y-8" ref={leftRef}>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "📧",
                bgColor: "bg-[#14325C]/10",
                title: "Email",
                content: "info@dynasticheritageafricana.com",
                link: true,
              },
              {
                icon: "📞",
                bgColor: "bg-[#C1272D]/10",
                title: "Phone / WhatsApp",
                content: "08038225998, 08024234620",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl bg-white p-6 shadow-lg border border-slate-200 transition-all duration-700 ${
                  leftVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: leftVisible
                    ? `${400 + index * 100}ms`
                    : "0ms",
                }}
              >
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={`mailto:${item.content}`}
                    className="text-[#C1272D] hover:text-red-700 text-sm transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-slate-700 text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          <div
            className={`rounded-2xl bg-white p-6 shadow-lg border border-slate-200 transition-all duration-700 delay-600 ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">
              Office Address
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Yayah Audu, Plot 209, Kubwa 4, Off NEPA Road, Abuja, Nigeria
            </p>
          </div>

          <div
            className={`rounded-2xl bg-gradient-to-br from-[#14325C] to-slate-800 p-8 text-white transition-all duration-700 delay-700 ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-3 text-sm">
              {[
                { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                { days: "Saturday", hours: "9:00 AM - 4:00 PM" },
                { days: "Sunday", hours: "Closed" },
              ].map((item, index) => (
                <div
                  key={item.days}
                  className={`flex justify-between transition-all duration-700 ${
                    leftVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: leftVisible
                      ? `${800 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <span className="text-slate-300">{item.days}</span>
                  <span className="font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl bg-white p-8 shadow-xl border border-slate-200"
          ref={rightRef}
        >
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-2 h-8 bg-[#C1272D] rounded-full"></div>
            <h3 className="text-xl font-bold text-slate-900">
              Send us a Message
            </h3>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "from_name",
                  type: "text",
                  label: "Full Name *",
                  placeholder: "Enter your full name",
                  required: true,
                },
                {
                  name: "from_email",
                  type: "email",
                  label: "Email Address *",
                  placeholder: "Enter your email",
                  required: true,
                },
              ].map((field, index) => (
                <div
                  key={field.label}
                  className={`transition-all duration-700 ${
                    rightVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: rightVisible
                      ? `${300 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={isSubmitting}
                  />
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                rightVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                placeholder="What is this regarding?"
                disabled={isSubmitting}
              />
            </div>

            <div
              className={`transition-all duration-700 delay-600 ${
                rightVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                placeholder="Tell us about your enquiry..."
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div
                className={`p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm transition-all duration-700 ${
                  rightVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                ✅ Thank you! Your message has been sent successfully. We'll get
                back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className={`p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm transition-all duration-700 ${
                  rightVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                ❌ Sorry, there was an error sending your message. Please try
                again or contact us directly at
                info@dynasticheritageafricana.com
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#14325C] to-[#1e4a8a] px-6 py-4 text-base font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md transition-all duration-700 delay-700 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              } ${
                rightVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="ml-2">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
