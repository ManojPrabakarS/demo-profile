import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Brain,
  BriefcaseBusiness,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

const expertise = [
  {
    icon: Users,
    number: "01",
    title: "Leadership Development",
    text: "Developing leadership capability, perspective and purposeful action in changing environments.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Leadership Communication",
    text: "Helping professionals communicate ideas with greater clarity, influence and meaning.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Business Storytelling",
    text: "Using the power of narrative to connect strategy, insight and human understanding.",
  },
  {
    icon: Brain,
    number: "04",
    title: "Behavioural Development",
    text: "Exploring behaviours, perspectives and interpersonal skills that shape professional effectiveness.",
  },
];

const focusAreas = [
  "Leadership",
  "Communication",
  "Behaviour",
  "Storytelling",
];

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-brand-ivory text-brand-black">
      {/* =========================================================
          HERO WITH FULL-WIDTH DUAL-COLOR TYPOGRAPHY
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-brand-yellow pt-[82px]">
        {/* =======================================================
            BASE LAYER (YELLOW BACKGROUND)
            Renders Brand Navy text on Yellow background
        ======================================================= */}
        <div className="relative z-10 hidden w-full lg:block">
          <HeroDesktopLayout theme="yellow" />
        </div>

        {/* =======================================================
            OVERLAY LAYER (NAVY BACKGROUND WITH UNIFIED CLIP-PATH)
            Renders Brand Yellow text on Navy background
            The clip-path clips both background and text simultaneously!
        ======================================================= */}
        <div
          className="pointer-events-none absolute inset-0 z-20 hidden w-full h-full bg-brand-navy pt-[82px] lg:block"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 35% 100%)",
          }}
        >
          {/* Decorative circles inside navy panel */}
          <div className="absolute right-[-80px] top-[100px] h-[520px] w-[520px] rounded-full border border-white/10" />
          <div className="absolute right-[40px] top-[240px] h-[300px] w-[300px] rounded-full border border-white/10" />

          <HeroDesktopLayout theme="navy" />
        </div>

        {/* =======================================================
            MOBILE HERO
        ======================================================= */}
        <div className="relative z-10 block w-full overflow-hidden lg:hidden">
          {/* Yellow Content Section */}
          <div className="w-full bg-brand-yellow px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-navy" />
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-navy sm:text-xs">
                Founder & Executive Coach
              </span>
            </div>

            <h1 className="mt-4 font-display text-[2.2rem] font-bold leading-[0.92] tracking-[-0.035em] text-brand-navy sm:text-[3.2rem]">
              Elevating Leadership <br />
              <span className="inline-block text-brand-navy">Through Business Storytelling</span>
            </h1>

            <p className="mt-4 text-[15px] font-medium leading-snug text-brand-navy sm:text-lg">
              Leadership. Communication. Transformation.
            </p>

            <ul className="mt-3.5 space-y-2 text-[13px] font-medium leading-relaxed text-brand-navy/90 sm:text-[14px]">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>Workshops, Business and Data Storytelling</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>Design Thinking and Innovation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>Strategy (Business)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                <span>Available for Workshops and Keynotes (Research for developing content)</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/profile"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-brand-navy px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 active:scale-[0.99] sm:w-auto"
              >
                Explore Profile
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center border border-brand-navy/40 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy transition-all duration-300 active:scale-[0.99] sm:w-auto"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* Navy Image Section */}
          <div className="relative w-full overflow-hidden bg-brand-navy px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
            {/* Mobile Decorative Circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full border border-white/5" />

            <div className="relative z-10 mx-auto max-w-[420px]">
              <HeroImage mobile />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      {/* <section className="w-full bg-brand-ivory py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal direction="left">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-navy sm:text-xs">
                  The Approach
                </p>

                <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

                <h2 className="mt-6 font-display text-[2rem] leading-[1.12] text-brand-navy sm:text-4xl lg:text-5xl">
                  Turning insight into meaningful action.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="min-w-0">
                <p className="text-[15px] leading-7 text-brand-muted sm:text-lg sm:leading-8">
                  Leadership is not only about what we know. It is also about
                  how we think, communicate, influence and respond to the
                  situations around us.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-brand-muted sm:mt-6 sm:text-lg sm:leading-8">
                  R.A. Nadesan's work brings together leadership development,
                  behavioural learning, communication and storytelling to
                  explore how people can create greater clarity and impact in
                  professional environments.
                </p>

                <Link
                  to="/profile"
                  className="group mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy sm:text-sm"
                >
                  Discover the Profile

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* =========================================================
          AREAS OF EXPERTISE
      ========================================================= */}

      {/* <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-navy sm:text-xs">
                Areas of Focus
              </p>

              <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

              <h2 className="mt-6 font-display text-[2rem] leading-[1.12] text-brand-navy sm:text-4xl lg:text-5xl">
                Building capability that creates impact.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-brand-muted sm:text-base">
                Explore the key areas that shape the work across coaching,
                workshops and professional development.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid overflow-hidden bg-brand-navy/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >
                  <div className="group h-full min-w-0 bg-white p-6 transition-all duration-500 hover:bg-brand-navy sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white">
                      <Icon size={22} />
                    </div>

                    <p className="mt-6 text-xs font-bold tracking-[0.2em] text-brand-navy group-hover:text-brand-yellow">
                      {item.number}
                    </p>

                    <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-brand-navy group-hover:text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-brand-muted group-hover:text-white/65">
                      {item.text}
                    </p>

                    <div className="mt-6 h-px w-10 bg-brand-yellow transition-all duration-500 group-hover:w-20" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* =========================================================
          LEADERSHIP COMMUNICATION
      ========================================================= */}
{/* 
      <section className="relative w-full overflow-hidden bg-brand-navy py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow">
                  Leadership Communication
                </p>

                <h2 className="mt-6 font-display text-[2.35rem] leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  When information
                  <span className="block text-brand-yellow">
                    needs meaning.
                  </span>
                </h2>

                <div className="mt-7 h-px w-20 bg-brand-yellow" />

                <p className="mt-7 text-[15px] leading-7 text-white/65 sm:text-lg sm:leading-8">
                  Effective leadership communication is about more than
                  delivering information. It is about creating understanding,
                  connection and purposeful action.
                </p>

                <Link
                  to="/workshop"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-brand-yellow pb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-yellow sm:text-sm"
                >
                  Explore Workshops

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-3 border border-brand-yellow/20 sm:-inset-5" />

                <div className="relative bg-brand-midnight p-6 sm:p-10 lg:p-12">
                  <MessageCircle
                    size={36}
                    className="text-brand-yellow"
                  />

                  <blockquote className="mt-9 font-display text-[1.8rem] leading-[1.2] text-white sm:text-4xl">
                    “Stories create the context.”
                  </blockquote>

                  <div className="mt-7 h-px w-14 bg-brand-yellow" />

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    A perspective reflected in work around business
                    storytelling, leadership communication and influence.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* =========================================================
          FOCUS STRIP
      ========================================================= */}

      {/* <section className="w-full bg-brand-yellow py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.08}
              >
                <div
                  className={`
                    min-w-0
                    px-3
                    py-3
                    sm:px-8
                    lg:px-10
                    ${
                      index % 2 !== 0
                        ? "border-l border-brand-black/20"
                        : ""
                    }
                    lg:border-l lg:border-brand-black/20
                    ${index === 0 ? "lg:border-l-0" : ""}
                  `}
                >
                  <p className="font-display text-3xl text-brand-navy sm:text-5xl">
                    0{index + 1}
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-brand-black/60 sm:text-xs sm:tracking-[0.18em]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* =========================================================
          WORKSHOP
      ========================================================= */}

      {/* <section className="w-full bg-brand-ivory py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal direction="left">
              <div className="relative w-full overflow-hidden">
                <img
                  src="/workshop.jpg"
                  alt="R.A. Nadesan workshop"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
                    Workshops
                  </p>

                  <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
                    Learning through experience.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-navy">
                  Workshops & Learning
                </p>

                <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

                <h2 className="mt-6 font-display text-[2rem] leading-[1.12] text-brand-navy sm:text-4xl lg:text-5xl">
                  Practical learning for
                  <span className="block">
                    real-world leadership.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-brand-muted sm:text-lg sm:leading-8">
                  Workshops can be shaped around leadership, communication,
                  behavioural development and storytelling.
                </p>

                <Link
                  to="/workshop"
                  className="group mt-8 inline-flex items-center gap-3 bg-brand-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black sm:px-7 sm:text-sm"
                >
                  View Workshops

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* =========================================================
          PORTFOLIO
      ========================================================= */}

      {/* <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-navy">
                  Professional Portfolio
                </p>

                <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

                <h2 className="mt-6 font-display text-[2rem] leading-[1.12] text-brand-navy sm:text-4xl lg:text-5xl">
                  Work that connects people
                  <span className="block sm:inline">
                    {" "}
                    & purpose.
                  </span>
                </h2>
              </div>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy sm:text-sm"
              >
                View Portfolio

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.15}
          >
            <div className="mt-10 overflow-hidden bg-brand-navy sm:mt-12">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
                  <img
                    src="/portfolio-1.jpg"
                    alt="Professional workshop and leadership engagement"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-brand-navy/20" />
                </div>

                <div className="flex items-center p-7 sm:p-12 lg:p-16">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
                      Professional Engagements
                    </p>

                    <h3 className="mt-5 font-display text-[1.8rem] leading-[1.2] text-white sm:text-4xl">
                      Creating spaces for
                      <span className="text-brand-yellow">
                        {" "}
                        learning and growth.
                      </span>
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
                      Explore selected professional engagements, workshops,
                      speaking opportunities and learning experiences.
                    </p>

                    <Link
                      to="/portfolio"
                      className="group mt-8 inline-flex items-center gap-3 border-b border-brand-yellow pb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-yellow sm:text-sm"
                    >
                      Explore Portfolio

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
{/* 
      <section className="relative w-full overflow-hidden bg-brand-navy py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-yellow/10" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <BriefcaseBusiness
              size={34}
              className="mx-auto text-brand-yellow"
            />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow">
              Let's Connect
            </p>

            <h2 className="mt-5 font-display text-[2rem] leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              Ready to create meaningful
              <span className="block text-brand-yellow">
                professional impact?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">
              Explore coaching, workshops and professional development
              opportunities with R.A. Nadesan.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 bg-brand-yellow px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-black transition-all duration-300 hover:bg-white sm:w-auto sm:text-sm"
            >
              Get in Touch

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section> */}
    </main>
  );
}

/* =============================================================
   HERO DESKTOP LAYOUT (DUAL-COLOR SYNCHRONIZED COMPONENT)
============================================================= */

function HeroDesktopLayout({ theme = "yellow" }) {
  const isNavy = theme === "navy";

  return (
    <div className="mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-[1600px] flex-col px-6 pb-16 pt-6 sm:px-10 lg:flex lg:px-16">
      {/* EYEBROW */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span
          className={`h-px w-8 shrink-0 sm:w-12 ${
            isNavy ? "bg-brand-yellow" : "bg-brand-navy"
          }`}
        />
        <span
          className={`text-[9px] font-bold uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.35em] ${
            isNavy ? "text-brand-yellow" : "text-brand-navy"
          }`}
        >
          Founder & Executive Coach
        </span>
      </div>

      {/* HEADLINE */}
      <h1
        className={`mt-4 font-display text-[2.8rem] font-bold leading-[0.9] tracking-[-0.035em] sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.6rem] 2xl:text-[6.4rem] ${
          isNavy ? "text-brand-yellow" : "text-brand-navy"
        }`}
      >
        Elevating Leadership <br />
        <span className="inline-block">Through Business Storytelling</span>
      </h1>

      {/* MIDDLE: 2-COLUMN GRID (DETAILS ON LEFT, IMAGE ON RIGHT) */}
      <div className="mt-6 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[52%_48%] xl:mt-8">
        {/* LEFT: TAGLINE, BULLET POINTS & BUTTONS */}
        <div className="max-w-[620px]">
          <p
            className={`font-medium leading-snug text-lg sm:text-xl xl:text-[1.35rem] ${
              isNavy ? "text-brand-yellow" : "text-brand-navy"
            }`}
          >
            Leadership. Communication. Transformation.
          </p>

          <ul
            className={`mt-4 space-y-2.5 text-[13px] sm:text-[14px] xl:text-[15px] font-medium leading-relaxed ${
              isNavy ? "text-brand-yellow/90" : "text-brand-navy/90"
            }`}
          >
            <li className="flex items-start gap-2.5">
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isNavy ? "bg-brand-yellow" : "bg-brand-navy"
                }`}
              />
              <span>Workshops, Business and Data Storytelling</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isNavy ? "bg-brand-yellow" : "bg-brand-navy"
                }`}
              />
              <span>Design Thinking and Innovation</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isNavy ? "bg-brand-yellow" : "bg-brand-navy"
                }`}
              />
              <span>Strategy (Business)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isNavy ? "bg-brand-yellow" : "bg-brand-navy"
                }`}
              />
              <span>Available for Workshops and Keynotes (Research for developing content)</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/profile"
              className={`group inline-flex min-h-[48px] items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                isNavy
                  ? "bg-brand-yellow text-brand-black hover:bg-white"
                  : "bg-brand-navy text-white hover:bg-brand-black"
              }`}
            >
              Explore Profile
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className={`inline-flex min-h-[48px] items-center justify-center border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                isNavy
                  ? "border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
                  : "border-brand-navy/40 text-brand-navy hover:bg-brand-navy hover:text-white"
              }`}
            >
              Start a Conversation
            </Link>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-8 flex items-center gap-3">
            <span
              className={`text-[9px] font-bold uppercase tracking-[0.35em] ${
                isNavy ? "text-brand-yellow/60" : "text-brand-navy/60"
              }`}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown
                size={15}
                className={isNavy ? "text-brand-yellow/70" : "text-brand-navy/70"}
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="flex items-center justify-center pr-4">
          <HeroImage desktop />
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   HERO IMAGE
============================================================= */

function HeroImage({ mobile = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: mobile ? 0 : 50,
        y: mobile ? 25 : 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        mx-auto
        w-full
        min-w-0
        ${
          mobile
            ? "max-w-[340px] sm:max-w-[390px] mb-4"
            : "max-w-[460px] xl:max-w-[500px] mb-6"
        }
      `}
    >
      {/* OUTER YELLOW FRAME */}
      <div
        className={`
          pointer-events-none
          absolute
          h-full
          w-full
          border-2
          border-brand-yellow
          ${
            mobile
              ? "-bottom-3 -left-3"
              : "-bottom-4 -left-4"
          }
        `}
      />

      {/* IMAGE */}
      <div className="relative w-full overflow-hidden bg-white shadow-2xl">
        <img
          src="/hero.png"
          alt="R.A. Nadesan"
          className={`
            block
            w-full
            object-cover
            object-top
            ${
              mobile
                ? "h-[380px] sm:h-[440px]"
                : "h-[450px] xl:h-[490px]"
            }
          `}
        />

        {/* SUBTLE GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-brand-navy/90 via-brand-navy/60 to-transparent" />

        {/* IMAGE CAPTION */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-yellow sm:text-xs sm:tracking-[0.22em]">
            R.A. Nadesan
          </p>

          <p className="mt-1 font-display text-[13px] leading-snug text-white sm:text-[15px]">
            Until the lion learns to write, every story will glorify the hunter.
          </p>
        </div>
      </div>
    </motion.div>
  );
}