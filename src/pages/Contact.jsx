import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      text: "Start a conversation by email",
      value: "Send an enquiry",
    },
    {
      icon: Phone,
      title: "Phone",
      text: "Discuss your requirements directly",
      value: "Let's talk",
    },
    {
      icon: MapPin,
      title: "Location",
      text: "Based in Chennai, India",
      value: "Chennai",
    },
  ];

  const enquiryTypes = [
    "Executive Coaching",
    "Leadership Development",
    "Corporate Workshop",
    "Communication Training",
    "Behavioural Development",
    "Other Enquiry",
  ];

  return (
    <main className="overflow-x-hidden bg-brand-ivory text-brand-black">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy">

        {/* Decorative circles */}
        <motion.div
          className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full border border-brand-yellow/20 sm:-right-32 sm:h-[550px] sm:w-[550px] lg:-right-20 lg:top-16 lg:h-[650px] lg:w-[650px]"
          animate={{
            rotate: 360,
            scale: [1, 1.04, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="pointer-events-none absolute -left-32 bottom-0 h-[250px] w-[250px] rounded-full border border-brand-yellow/10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-navy/95 to-transparent lg:w-[70%]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-40">

          <div className="max-w-4xl">

            <Reveal direction="left">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-brand-yellow" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow sm:text-xs">
                  Contact
                </p>

              </div>

              <h1 className="mt-6 font-display text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                Start a
                <span className="block text-brand-yellow">
                  conversation.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Whether you are exploring executive coaching, leadership
                development or a customised workshop, begin by sharing what
                you are looking to achieve.
              </p>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="bg-brand-ivory py-20 sm:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-5 md:grid-cols-3">

            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >

                  <div className="group h-full border border-brand-navy/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-brand-navy hover:shadow-xl sm:p-8">

                    <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                      <Icon size={21} />
                    </div>

                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold group-hover:text-brand-yellow">
                      {item.title}
                    </p>

                    <h2 className="mt-2 font-display text-2xl text-brand-navy group-hover:text-white">
                      {item.value}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-brand-muted group-hover:text-white/55">
                      {item.text}
                    </p>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* LEFT */}
            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Send an Enquiry
                </p>

                <div className="mt-5 h-1 w-16 bg-brand-yellow" />

                <h2 className="mt-7 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Tell us what you are looking to achieve.
                </h2>

                <p className="mt-6 text-base leading-8 text-brand-muted">
                  Share a few details about your organisation, team or
                  professional development requirement. This helps create a
                  more meaningful first conversation.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Leadership development",
                    "Executive coaching",
                    "Communication",
                    "Behavioural development",
                    "Customised workshops",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-brand-gold"
                      />

                      <span className="text-sm font-medium text-brand-navy">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </Reveal>


            {/* FORM */}
            <Reveal direction="right">

              <form
                className="border border-brand-navy/10 bg-brand-ivory p-6 sm:p-8 lg:p-10"
                onSubmit={(e) => e.preventDefault()}
              >

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Name */}
                  <div className="sm:col-span-1">

                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-gold"
                    />

                  </div>


                  {/* Email */}
                  <div className="sm:col-span-1">

                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="mt-2 w-full border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-gold"
                    />

                  </div>


                  {/* Organisation */}
                  <div className="sm:col-span-1">

                    <label
                      htmlFor="organisation"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Organisation
                    </label>

                    <input
                      id="organisation"
                      type="text"
                      placeholder="Organisation / Company"
                      className="mt-2 w-full border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-gold"
                    />

                  </div>


                  {/* Phone */}
                  <div className="sm:col-span-1">

                    <label
                      htmlFor="phone"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="mt-2 w-full border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-gold"
                    />

                  </div>


                  {/* Enquiry Type */}
                  <div className="sm:col-span-2">

                    <label
                      htmlFor="enquiry"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Area of Interest
                    </label>

                    <select
                      id="enquiry"
                      defaultValue=""
                      className="mt-2 w-full border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-gold"
                    >

                      <option value="" disabled>
                        Select an area
                      </option>

                      {enquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                        >
                          {type}
                        </option>
                      ))}

                    </select>

                  </div>


                  {/* Message */}
                  <div className="sm:col-span-2">

                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Tell us briefly about your requirement..."
                      className="mt-2 w-full resize-none border-b border-brand-navy/20 bg-transparent px-0 py-3 text-sm leading-7 text-brand-black outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-gold"
                    />

                  </div>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-3 bg-brand-navy px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black sm:w-auto"
                >
                  Send Enquiry

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONVERSATION SECTION
      ===================================================== */}
      <section className="bg-brand-yellow py-20 sm:py-28">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <MessageCircle
              size={36}
              className="mx-auto text-brand-navy"
            />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-black/60">
              Every meaningful engagement starts with a conversation.
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Let's explore what
              <span className="block">
                comes next.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-black/60 sm:text-lg">
              Share your requirements and start a conversation around
              leadership, communication, coaching or professional development.
            </p>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-brand-navy py-24 sm:py-32">

        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

          <Reveal>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
              Continue Exploring
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore the work,
              <span className="block text-brand-yellow">
                then start the conversation.
              </span>
            </h2>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/workshop"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
              >
                View Workshops
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-brand-yellow px-7 py-4 text-sm font-bold uppercase tracking-[0.13em] text-brand-black transition-all duration-300 hover:bg-white"
              >
                View Portfolio

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}