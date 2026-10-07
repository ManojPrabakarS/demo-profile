import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Lightbulb,
  MessageCircle,
  Mic2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Workshop() {
  const workshops = [
    {
      number: "01",
      icon: Users,
      title: "Leadership Development",
      description:
        "Explore the mindset, behaviours and capabilities that help professionals lead with greater awareness, clarity and purpose.",
      points: [
        "Leadership awareness",
        "Decision making",
        "Leading through change",
      ],
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Leadership Communication",
      description:
        "Develop clearer and more purposeful communication for conversations, teams, presentations and leadership situations.",
      points: [
        "Clarity of communication",
        "Influence and connection",
        "Listening and dialogue",
      ],
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Business Storytelling",
      description:
        "Discover how storytelling can help leaders communicate ideas, create context and make messages more meaningful.",
      points: [
        "Story structure",
        "Strategic communication",
        "Creating connection",
      ],
    },
    {
      number: "04",
      icon: Brain,
      title: "Emotional Intelligence",
      description:
        "Build greater awareness of emotions, empathy and interpersonal behaviour in professional environments.",
      points: [
        "Self-awareness",
        "Empathy",
        "Interpersonal effectiveness",
      ],
    },
    {
      number: "05",
      icon: Mic2,
      title: "Presentation & Influence",
      description:
        "Strengthen the ability to communicate ideas confidently and create meaningful engagement with an audience.",
      points: [
        "Presentation presence",
        "Audience engagement",
        "Influential communication",
      ],
    },
    {
      number: "06",
      icon: Lightbulb,
      title: "Behavioural Development",
      description:
        "Understand the behaviours and perspectives that influence relationships, teamwork and professional effectiveness.",
      points: [
        "Behavioural awareness",
        "Professional relationships",
        "Personal effectiveness",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "Begin by understanding the people, context and development needs.",
    },
    {
      number: "02",
      title: "Explore",
      text: "Create opportunities to examine perspectives, behaviours and communication.",
    },
    {
      number: "03",
      title: "Practise",
      text: "Turn ideas into practical skills through interaction and application.",
    },
    {
      number: "04",
      title: "Apply",
      text: "Take the learning back into real professional situations.",
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

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

            <Reveal direction="left">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-brand-yellow" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow sm:text-xs">
                    Workshops & Learning
                  </p>

                </div>

                <h1 className="mt-6 font-display text-5xl font-medium leading-[1] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                  Learning that
                  <span className="block text-brand-yellow">
                    creates impact.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                  Practical learning experiences designed around leadership,
                  communication, behavioural development and professional
                  effectiveness.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex min-h-[52px] items-center gap-3 bg-brand-yellow px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-brand-black transition-all duration-300 hover:bg-white sm:text-sm"
                >
                  Discuss a Workshop

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </Reveal>


            {/* Workshop Image */}
            <Reveal direction="right">

              <div className="relative mx-auto w-full max-w-[450px] lg:ml-auto">

                <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-brand-yellow/70 sm:-bottom-5 sm:-left-5" />

                <div className="relative overflow-hidden bg-brand-midnight">

                  <img
                    src="/workshop.jpg"
                    alt="R.A. Nadesan workshop"
                    className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[540px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow sm:text-xs">
                      Professional Learning
                    </p>

                    <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
                      Learn. Reflect. Apply.
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  The Workshop Approach
                </p>

                <div className="mt-5 h-1 w-16 bg-brand-yellow" />

                <h2 className="mt-7 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                  Learning should move beyond the classroom.
                </h2>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="max-w-3xl">

                <p className="text-lg leading-8 text-brand-muted">
                  Effective professional development is not simply about
                  listening to information. It is about creating space to
                  reflect, question, practise and apply new perspectives.
                </p>

                <p className="mt-7 text-lg leading-8 text-brand-muted">
                  Workshops can be shaped around the needs of professionals,
                  teams and organisations, connecting concepts with practical
                  workplace situations.
                </p>

                <div className="mt-9 flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-yellow text-brand-black">
                    <Target size={22} />
                  </div>

                  <p className="text-sm font-semibold leading-6 text-brand-navy">
                    Focused learning. Practical reflection. Meaningful
                    application.
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          WORKSHOP AREAS
      ===================================================== */}
      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                Areas of Focus
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
                Workshops built around
                <span className="text-brand-gold">
                  {" "}people and performance.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-brand-muted">
                Explore the key areas that can form part of customised
                leadership and professional development programmes.
              </p>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;

              return (
                <Reveal
                  key={workshop.title}
                  delay={index * 0.06}
                >

                  <div className="group h-full border border-brand-navy/10 bg-brand-ivory p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-brand-navy hover:shadow-xl sm:p-8">

                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                        <Icon size={22} />
                      </div>

                      <span className="font-display text-3xl text-brand-navy/10 group-hover:text-white/10">
                        {workshop.number}
                      </span>

                    </div>

                    <h3 className="mt-8 font-display text-2xl text-brand-navy transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {workshop.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-brand-muted transition-colors duration-500 group-hover:text-white/60">
                      {workshop.description}
                    </p>

                    <div className="mt-7 space-y-3">

                      {workshop.points.map((point) => (

                        <div
                          key={point}
                          className="flex items-center gap-3"
                        >

                          <Check
                            size={15}
                            className="shrink-0 text-brand-gold group-hover:text-brand-yellow"
                          />

                          <span className="text-xs font-medium text-brand-navy/70 group-hover:text-white/60">
                            {point}
                          </span>

                        </div>

                      ))}

                    </div>

                    <div className="mt-8 h-px w-10 bg-brand-yellow transition-all duration-500 group-hover:w-20" />

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          LEARNING PROCESS
      ===================================================== */}
      <section className="bg-brand-navy py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <Reveal direction="left">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-yellow">
                  Learning Journey
                </p>

                <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  From insight
                  <span className="block text-brand-yellow">
                    to application.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-base leading-8 text-white/60 sm:text-lg">
                  A workshop becomes meaningful when learning can be connected
                  to real situations and professional behaviour.
                </p>

              </div>

            </Reveal>


            <div className="space-y-0">

              {process.map((item, index) => (

                <Reveal
                  key={item.number}
                  direction="right"
                  delay={index * 0.08}
                >

                  <div className="group flex gap-5 border-b border-white/10 py-7 first:pt-0 sm:gap-8">

                    <span className="font-display text-3xl text-brand-yellow/60 transition-colors duration-300 group-hover:text-brand-yellow sm:text-4xl">
                      {item.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3 className="font-display text-2xl text-white sm:text-3xl">
                          {item.title}
                        </h3>

                        <ChevronRight
                          size={20}
                          className="text-brand-yellow opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />

                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CUSTOM PROGRAMMES
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-yellow py-24 sm:py-32">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-brand-black/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-black/60">
              Customised Learning
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              One organisation.
              <span className="block">
                One unique learning need.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-brand-black/65 sm:text-lg">
              Workshop themes can be adapted around the context, audience and
              professional development objectives of an organisation or team.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex min-h-[52px] items-center gap-3 bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-brand-black"
            >
              Discuss Your Requirements

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-brand-ivory py-24 sm:py-32">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <Reveal>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Ready to Begin?
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Let's create a learning
              <span className="block text-brand-gold">
                experience with purpose.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
              Get in touch to explore a workshop, coaching conversation or
              customised professional development programme.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex min-h-[52px] items-center gap-3 bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black"
            >
              Start a Conversation

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