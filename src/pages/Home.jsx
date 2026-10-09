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
          HERO
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-brand-yellow">
        {/* =====================================================
            DESKTOP NAVY PANEL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] bg-brand-navy lg:block"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* =====================================================
            LARGE DECORATIVE CIRCLE
        ===================================================== */}

        <div className="pointer-events-none absolute right-[-100px] top-[80px] hidden h-[520px] w-[520px] rounded-full border border-white/10 lg:block xl:right-[-60px] xl:h-[620px] xl:w-[620px]" />

        <div className="pointer-events-none absolute right-[20px] top-[210px] hidden h-[300px] w-[300px] rounded-full border border-white/10 lg:block" />

        {/* =====================================================
            DESKTOP HERO CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto hidden min-h-screen w-full max-w-[1600px] pt-[82px] lg:flex">
          <div className="grid w-full grid-cols-[53%_47%] items-center">
            {/* =================================================
                LEFT YELLOW SIDE
            ================================================= */}

            <div className="relative flex min-h-[680px] items-center px-10 py-16 xl:px-20 2xl:px-24">
              <div className="w-full max-w-[700px]">
                <HeroText desktop />
              </div>

              {/* Scroll */}

              <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-brand-black/50">
                  Scroll to explore
                </span>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="mt-3"
                >
                  <ArrowDown
                    size={18}
                    className="text-brand-black/70"
                  />
                </motion.div>
              </div>
            </div>

            {/* =================================================
                RIGHT NAVY SIDE
            ================================================= */}

            <div className="relative flex min-h-[680px] items-center justify-center px-10 xl:px-16">
              <HeroImage desktop />
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE HERO
        ===================================================== */}

        <div className="relative z-10 block w-full pt-[82px] lg:hidden">
          {/* Yellow content */}

          <div className="w-full bg-brand-yellow px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
            <HeroText mobile />
          </div>

          {/* Navy image */}

          <div className="w-full bg-brand-navy px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16">
            <HeroImage mobile />
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
   HERO TEXT
============================================================= */

function HeroText({ mobile = false }) {
  return (
    <div className="relative z-20 min-w-0">
      {/* EYEBROW */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 sm:gap-4"
      >
        <span className="h-px w-8 shrink-0 bg-brand-black sm:w-12" />

        <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-brand-black sm:text-xs sm:tracking-[0.35em]">
          Founder & Executive Coach
        </span>
      </motion.div>

      {/* NAME */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          mt-6
          font-display
          font-medium
          leading-[0.86]
          tracking-[-0.045em]
          text-brand-black
          ${
            mobile
              ? "text-[3.65rem] sm:text-[5rem]"
              : "text-[5.3rem] xl:text-[6.5rem] 2xl:text-[7rem]"
          }
        `}
      >
        Elevating Leadership Through

        <span className="block text-brand-navy">
           Business Storytelling
        </span>
      </motion.h1>

      {/* TAGLINE */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
        className={`
          mt-6
          font-medium
          leading-snug
          text-brand-black
          ${
            mobile
              ? "text-[15px] sm:text-xl"
              : "text-xl xl:text-[1.45rem]"
          }
        `}
      >
        Leadership.
        <span className="text-brand-navy">
          {" "}
          Communication.
        </span>{" "}
        Transformation.
      </motion.p>

      {/* DESCRIPTION */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.45,
        }}
        className={`
          max-w-[650px]
          text-brand-black/70
          ${
            mobile
              ? "mt-4 text-[13px] leading-6 sm:text-base sm:leading-7"
              : "mt-6 text-[15px] leading-7 xl:text-base xl:leading-8"
          }
        `}
      >
        Executive coaching, behavioural development and leadership
        communication designed to help professionals think with clarity,
        communicate with purpose and create meaningful impact.
      </motion.p>

      {/* BUTTONS */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        className={`
          mt-7
          flex
          w-full
          gap-3
          ${
            mobile
              ? "flex-col sm:flex-row"
              : "flex-col sm:flex-row"
          }
        `}
      >
        <Link
          to="/profile"
          className="
            group
            inline-flex
            min-h-[50px]
            w-full
            items-center
            justify-center
            gap-2
            bg-brand-navy
            px-6
            py-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:bg-brand-black
            sm:w-auto
            sm:text-xs
          "
        >
          Explore Profile

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          to="/contact"
          className="
            inline-flex
            min-h-[50px]
            w-full
            items-center
            justify-center
            border
            border-brand-black/30
            px-6
            py-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-brand-black
            transition-all
            duration-300
            hover:bg-brand-black
            hover:text-white
            sm:w-auto
            sm:text-xs
          "
        >
          Start a Conversation
        </Link>
      </motion.div>
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
        ${mobile ? "max-w-[390px]" : "max-w-[520px]"}
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
              : "-bottom-5 -left-5"
          }
        `}
      />

      {/* IMAGE */}

      <div className="relative w-full overflow-hidden bg-white">
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
                ? "h-[410px] sm:h-[500px]"
                : "h-[550px] xl:h-[600px]"
            }
          `}
        />

        {/* GRADIENT */}

        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent" />

        {/* IMAGE CAPTION */}

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-yellow sm:text-xs sm:tracking-[0.22em]">
            R.A. Nadesan
          </p>

          <p className="mt-1 font-display text-[14px] leading-tight text-white sm:mt-2 sm:text-md">
          Util the Lion learns to write, every story will glorify the hunter
          </p>
        </div>

        {/* ===================================================
            FLOATING BADGE
        =================================================== */}

        {/* <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-3
            top-4
            w-[105px]
            bg-brand-yellow
            p-3
            shadow-xl
            sm:right-5
            sm:top-7
            sm:w-[130px]
            sm:p-4
          "
        >
          <Award
            size={21}
            className="text-brand-black sm:h-6 sm:w-6"
          />

          <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.13em] text-brand-black sm:mt-3 sm:text-[10px]">
            Executive
          </p>

          <p className="text-[8px] uppercase tracking-[0.13em] text-brand-black/60 sm:text-[10px]">
            Coaching
          </p>
        </motion.div> */}
      </div>
      
    </motion.div>
  );
}