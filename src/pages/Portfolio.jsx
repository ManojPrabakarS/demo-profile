import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  MessageCircle,
  Mic2,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Portfolio() {
  const engagements = [
    {
      number: "01",
      category: "Leadership Development",
      title: "Developing Leaders for Meaningful Impact",
      description:
        "Leadership development experiences focused on awareness, perspective, communication and purposeful action.",
      icon: Users,
      tags: [
        "Leadership",
        "Awareness",
        "Decision Making",
      ],
    },
    {
      number: "02",
      category: "Communication",
      title: "Communicating with Clarity and Influence",
      description:
        "Professional learning focused on helping individuals communicate ideas clearly, listen effectively and create stronger connections.",
      icon: MessageCircle,
      tags: [
        "Communication",
        "Influence",
        "Listening",
      ],
    },
    {
      number: "03",
      category: "Business Storytelling",
      title: "Turning Information into Meaning",
      description:
        "Exploring storytelling as a powerful way to communicate ideas, create context and connect people with a message.",
      icon: BookOpen,
      tags: [
        "Storytelling",
        "Strategy",
        "Leadership",
      ],
    },
    {
      number: "04",
      category: "Behavioural Development",
      title: "Understanding Behaviour at Work",
      description:
        "Learning experiences that explore behaviour, interpersonal relationships and the capabilities that influence professional effectiveness.",
      icon: Award,
      tags: [
        "Behaviour",
        "Relationships",
        "Effectiveness",
      ],
    },
  ];

  const engagementTypes = [
    {
      icon: BriefcaseBusiness,
      title: "Executive Coaching",
      text: "Individual development conversations focused on leadership, behaviour, communication and professional growth.",
    },
    {
      icon: Users,
      title: "Corporate Workshops",
      text: "Interactive learning experiences designed around the development needs of teams and organisations.",
    },
    {
      icon: Mic2,
      title: "Speaking & Facilitation",
      text: "Professional sessions exploring leadership, communication, storytelling and behavioural development.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-brand-ivory text-brand-black">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-navy">

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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-navy/95 to-transparent lg:w-[70%]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

            {/* LEFT */}
            <Reveal direction="left">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-brand-yellow" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow sm:text-xs">
                    Professional Portfolio
                  </p>

                </div>

                <h1 className="mt-6 font-display text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                  Work that
                  <span className="block text-brand-yellow">
                    creates impact.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                  A collection of professional learning themes, leadership
                  engagements and development experiences centred around
                  people, communication and performance.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex min-h-[52px] items-center gap-3 bg-brand-yellow px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-brand-black transition-all duration-300 hover:bg-white sm:text-sm"
                >
                  Discuss an Engagement

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </Reveal>


            {/* RIGHT IMAGE */}
            <Reveal direction="right">

              <div className="relative mx-auto w-full max-w-[450px] lg:ml-auto">

                <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-brand-yellow/70 sm:-bottom-5 sm:-left-5" />

                <div className="relative overflow-hidden bg-brand-midnight">

                  <img
                    src="/portfolio-1.jpg"
                    alt="R.A. Nadesan professional engagement"
                    className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[540px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow sm:text-xs">
                      Professional Engagements
                    </p>

                    <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
                      People. Learning. Growth.
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  The Work
                </p>

                <div className="mt-5 h-1 w-16 bg-brand-yellow" />

                <h2 className="mt-7 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Connecting learning with real-world professional challenges.
                </h2>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="max-w-3xl">

                <p className="text-lg leading-8 text-brand-muted">
                  Professional development becomes valuable when people can
                  connect ideas with the situations they encounter every day.
                </p>

                <p className="mt-7 text-lg leading-8 text-brand-muted">
                  The work represented here brings together executive coaching,
                  workshops, behavioural development, communication and
                  leadership learning.
                </p>

                <p className="mt-7 text-lg leading-8 text-brand-muted">
                  Each engagement can be shaped around the audience, context
                  and development objectives of the organisation or
                  professional group.
                </p>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          ENGAGEMENT TYPES
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                Engagements
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                Different formats.
                <span className="text-brand-gold">
                  {" "}One purpose.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-brand-muted">
                Learning and development can take different forms depending on
                the people, objectives and professional context.
              </p>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {engagementTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >

                  <div className="group h-full border border-brand-navy/10 bg-brand-ivory p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-brand-navy hover:shadow-xl">

                    <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-8 font-display text-2xl text-brand-navy transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-brand-muted transition-colors duration-500 group-hover:text-white/60">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-gold group-hover:text-brand-yellow">
                      Explore

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED WORK
      ===================================================== */}
      <section className="bg-brand-navy py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="mb-14">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
                Featured Areas
              </p>

              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Selected areas of
                <span className="text-brand-yellow">
                  {" "}professional work.
                </span>
              </h2>

            </div>

          </Reveal>


          <div className="space-y-5">

            {engagements.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.06}
                >

                  <article className="group relative overflow-hidden border border-white/10 bg-brand-midnight p-7 transition-all duration-500 hover:border-brand-yellow/40 sm:p-10">

                    {/* Number */}
                    <div className="absolute right-6 top-3 font-display text-[100px] leading-none text-white/[0.025] sm:right-10 sm:text-[130px]">
                      {item.number}
                    </div>

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[90px_1fr_auto] lg:items-center">

                      {/* Icon */}
                      <div className="flex h-16 w-16 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">

                        <Icon size={27} />

                      </div>


                      {/* Content */}
                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow">
                          {item.category}
                        </p>

                        <h3 className="mt-3 max-w-2xl font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                          {item.description}
                        </p>


                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">

                          {item.tags.map((tag) => (

                            <span
                              key={tag}
                              className="border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50"
                            >
                              {tag}
                            </span>

                          ))}

                        </div>

                      </div>


                      {/* Arrow */}
                      <div className="hidden h-12 w-12 items-center justify-center border border-white/10 text-brand-yellow transition-all duration-500 group-hover:border-brand-yellow lg:flex">

                        <ChevronRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </div>

                    </div>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROFESSIONAL APPROACH
      ===================================================== */}
      <section className="bg-brand-yellow py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-black/60">
                  A Human-Centred Approach
                </p>

                <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Development begins
                  <span className="block">
                    with understanding.
                  </span>
                </h2>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="space-y-5">

                {[
                  "Understand the professional context",
                  "Identify development opportunities",
                  "Create meaningful learning experiences",
                  "Connect learning with application",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-brand-black/15 pb-5"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-yellow">
                      <Check size={16} />
                    </div>

                    <p className="font-display text-xl text-brand-navy sm:text-2xl">
                      {item}
                    </p>

                    <span className="ml-auto hidden text-xs font-bold tracking-[0.2em] text-brand-black/30 sm:block">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Let's Work Together
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Have a development
              <span className="block text-brand-gold">
                objective in mind?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
              Start a conversation about executive coaching, leadership
              development, workshops or a customised learning experience.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex min-h-[52px] items-center gap-3 bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black"
            >
              Get in Touch

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>
      </section>

    </main>
  );
}