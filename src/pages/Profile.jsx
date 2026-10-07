import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  Compass,
  Heart,
  Lightbulb,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

export default function Profile() {
  const focusAreas = [
    {
      icon: Users,
      number: "01",
      title: "Leadership Development",
      text: "Supporting professionals in developing greater awareness, perspective and purposeful leadership behaviour.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Communication",
      text: "Helping people communicate with clarity, listen with intention and create stronger professional connections.",
    },
    {
      icon: Brain,
      number: "03",
      title: "Behavioural Development",
      text: "Exploring the behaviours and interpersonal capabilities that influence professional relationships and effectiveness.",
    },
    {
      icon: Lightbulb,
      number: "04",
      title: "Emotional Intelligence",
      text: "Building awareness of emotions, empathy and behavioural responses to navigate professional situations more effectively.",
    },
  ];

  const principles = [
    "Awareness before action",
    "Clarity in communication",
    "Understanding behaviour",
    "Continuous development",
  ];

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-brand-ivory text-brand-black">
      {/* =========================================================
          PROFILE HERO
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-brand-navy">
        {/* Decorative circles */}

        <motion.div
          className="pointer-events-none absolute -right-48 top-10 hidden h-[500px] w-[500px] rounded-full border border-brand-yellow/15 sm:block lg:-right-24 lg:top-20 lg:h-[650px] lg:w-[650px]"
          animate={{
            rotate: 360,
            scale: [1, 1.03, 1],
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
          className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[400px] w-[400px] rounded-full border border-brand-yellow/10 lg:block"
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Desktop gradient */}

        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-brand-midnight via-brand-navy/95 to-brand-navy/60 lg:block" />

        {/* Hero container */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            {/* ===================================================
                HERO CONTENT
            =================================================== */}

            <Reveal direction="left">
              <div className="min-w-0">
                {/* Label */}

                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 shrink-0 bg-brand-yellow sm:w-10" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-brand-yellow sm:text-xs sm:tracking-[0.3em]">
                    Profile
                  </p>
                </div>

                {/* Name */}

                <h1 className="mt-6 font-display text-[3.5rem] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                  R.A.
                  <span className="block text-brand-yellow">
                    Nadesan
                  </span>
                </h1>

                {/* Description */}

                <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/70 sm:mt-7 sm:text-xl sm:leading-8">
                  Executive Coach, behavioural and soft-skills trainer,
                  focused on helping professionals understand themselves,
                  communicate effectively and develop their leadership
                  capabilities.
                </p>

                {/* Buttons */}

                <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                  <Link
                    to="/workshop"
                    className="
                      group
                      inline-flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      bg-brand-yellow
                      px-6
                      py-4
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-brand-black
                      transition-all
                      duration-300
                      hover:bg-white
                      sm:w-auto
                      sm:px-7
                      sm:text-sm
                      sm:tracking-[0.13em]
                    "
                  >
                    <span>Explore Workshops</span>

                    <ArrowRight
                      size={18}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      border
                      border-white/30
                      px-6
                      py-4
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-brand-yellow
                      hover:bg-brand-yellow
                      hover:text-brand-black
                      sm:w-auto
                      sm:px-7
                      sm:text-sm
                      sm:tracking-[0.13em]
                    "
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* ===================================================
                PROFILE IMAGE
            =================================================== */}

            <Reveal direction="right">
              <div className="relative mx-auto w-full max-w-[390px] min-w-0 lg:ml-auto lg:max-w-[420px]">
                {/* Yellow frame */}

                <div className="pointer-events-none absolute -bottom-3 -left-3 h-full w-full border-2 border-brand-yellow/70 sm:-bottom-5 sm:-left-5" />

                {/* Image */}

                <div className="relative w-full overflow-hidden bg-brand-midnight">
                  <img
                    src="/profile.jpg"
                    alt="R.A. Nadesan"
                    className="block h-[430px] w-full object-cover object-top grayscale-[8%] transition duration-700 hover:scale-105 sm:h-[560px]"
                  />

                  {/* Gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-midnight/95 via-transparent to-transparent" />

                  {/* Image caption */}

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-yellow sm:text-[10px] sm:tracking-[0.25em]">
                      Executive Coaching
                    </p>

                    <p className="mt-2 font-display text-[1.35rem] leading-tight text-white sm:text-3xl">
                      Leadership begins with awareness.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFESSIONAL INTRODUCTION
      ========================================================= */}

      <section className="w-full bg-brand-ivory py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Heading */}

            <Reveal direction="left">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold sm:text-xs sm:tracking-[0.3em]">
                  Professional Perspective
                </p>

                <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

                <h2 className="mt-6 font-display text-[2rem] leading-[1.15] text-brand-navy sm:text-4xl lg:text-5xl">
                  Understanding people is at the heart of development.
                </h2>
              </div>
            </Reveal>

            {/* Content */}

            <Reveal direction="right">
              <div className="min-w-0 max-w-3xl">
                <p className="text-[15px] leading-7 text-brand-muted sm:text-lg sm:leading-8">
                  Professional growth is not simply about acquiring more
                  knowledge. It also involves understanding how we think,
                  behave, communicate and respond to the people and situations
                  around us.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-brand-muted sm:mt-7 sm:text-lg sm:leading-8">
                  R.A. Nadesan's work brings together executive coaching,
                  behavioural development, communication and emotional
                  intelligence to explore these dimensions of professional
                  effectiveness.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-brand-muted sm:mt-7 sm:text-lg sm:leading-8">
                  His published work has addressed subjects including
                  personality, emotional intelligence, positivity and
                  continuous personal development.
                </p>

                <div className="mt-7 h-px w-full bg-brand-navy/10 sm:mt-9" />

                <p className="mt-6 text-sm font-semibold leading-7 text-brand-navy sm:mt-7">
                  The objective is simple: create greater awareness, improve
                  the way people connect and turn insight into purposeful
                  action.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE AREAS
      ========================================================= */}

      <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="min-w-0 max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold sm:text-xs sm:tracking-[0.3em]">
                Areas of Expertise
              </p>

              <div className="mt-5 h-1 w-14 bg-brand-yellow sm:w-16" />

              <h2 className="mt-6 font-display text-[2rem] leading-[1.15] text-brand-navy sm:text-4xl lg:text-5xl">
                Developing people from the inside out.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-brand-muted sm:text-base sm:leading-7">
                A combination of leadership, communication and behavioural
                perspectives creates a broader approach to professional
                development.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid w-full gap-px overflow-hidden bg-brand-navy/10 sm:mt-14 sm:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >
                  <div className="group h-full min-w-0 bg-white p-6 transition-all duration-500 hover:bg-brand-navy sm:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-yellow text-brand-black transition-all duration-500 group-hover:bg-white sm:h-12 sm:w-12">
                        <Icon size={21} />
                      </div>

                      <span className="font-display text-2xl text-brand-navy/10 transition-colors duration-500 group-hover:text-white/10 sm:text-3xl">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-[1.65rem] leading-tight text-brand-navy transition-colors duration-500 group-hover:text-white sm:mt-8 sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-brand-muted transition-colors duration-500 group-hover:text-white/60">
                      {item.text}
                    </p>

                    <div className="mt-6 h-px w-10 bg-brand-yellow transition-all duration-500 group-hover:w-20 sm:mt-7" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-brand-yellow py-16 sm:py-24 lg:py-32">
        {/* Decorative circles */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[320px] w-[320px] rounded-full border border-brand-black/10 sm:h-[400px] sm:w-[400px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[500px] w-[500px] rounded-full border border-brand-black/10 sm:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-24">
            {/* Heading */}

            <Reveal direction="left">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-black/60 sm:text-xs sm:tracking-[0.3em]">
                  The Philosophy
                </p>

                <h2 className="mt-6 font-display text-[2.35rem] leading-[1.08] text-brand-navy sm:text-5xl lg:text-6xl">
                  Awareness creates
                  <span className="block">
                    the possibility of change.
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* Principles */}

            <Reveal direction="right">
              <div className="space-y-0">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="flex min-w-0 items-center gap-4 border-b border-brand-black/15 py-5 first:pt-0 sm:gap-5 sm:py-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-yellow">
                      <Check size={16} />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <p className="font-display text-[1.15rem] leading-tight text-brand-navy sm:text-2xl">
                        {principle}
                      </p>

                      <span className="hidden shrink-0 text-xs font-bold tracking-[0.2em] text-brand-black/30 sm:block">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMOTIONAL INTELLIGENCE
      ========================================================= */}

      <section className="w-full bg-brand-navy py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            {/* Content */}

            <Reveal direction="left">
              <div className="min-w-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Heart
                    size={26}
                    className="shrink-0 text-brand-yellow sm:h-7 sm:w-7"
                  />

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-yellow sm:text-xs sm:tracking-[0.3em]">
                    Emotional Intelligence
                  </p>
                </div>

                <h2 className="mt-6 font-display text-[2.35rem] leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  Listen beyond
                  <span className="block text-brand-yellow">
                    the words.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:mt-7 sm:text-lg sm:leading-8">
                  Emotional intelligence involves more than recognising our
                  own emotions. It also involves empathy, perspective,
                  listening and understanding the people around us.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                  These capabilities can influence the quality of
                  communication, relationships and professional interactions.
                </p>

                <Link
                  to="/workshop"
                  className="group mt-7 inline-flex max-w-full items-center gap-3 border-b border-brand-yellow pb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-yellow sm:mt-9 sm:text-sm sm:tracking-[0.15em]"
                >
                  <span>Explore Workshops</span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Quote card */}

            <Reveal direction="right">
              <div className="relative mx-auto w-full max-w-xl min-w-0">
                <div className="pointer-events-none absolute -inset-3 border border-brand-yellow/20 sm:-inset-5" />

                <div className="relative min-w-0 bg-brand-midnight p-6 sm:p-10 lg:p-12">
                  <Compass
                    size={38}
                    className="text-brand-yellow sm:h-[42px] sm:w-[42px]"
                  />

                  <p className="mt-7 font-display text-[1.8rem] leading-[1.2] text-white sm:mt-8 sm:text-4xl">
                    “Listen for
                    <span className="text-brand-yellow">
                      {" "}
                      feeling and meaning,
                    </span>{" "}
                    not merely the words.”
                  </p>

                  <div className="mt-7 h-px w-14 bg-brand-yellow sm:mt-8 sm:w-16" />

                  <p className="mt-5 text-sm leading-7 text-white/50 sm:mt-6">
                    A principle discussed by R.A. Nadesan in his published
                    writing on emotional intelligence and communication.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTINUOUS DEVELOPMENT
      ========================================================= */}

      <section className="w-full bg-brand-ivory py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <Target
              size={34}
              className="mx-auto text-brand-gold"
            />

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold sm:mt-7 sm:text-xs sm:tracking-[0.3em]">
              Continuous Development
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-display text-[2rem] leading-[1.15] text-brand-navy sm:text-5xl lg:text-6xl">
              Sharpen the skills that shape
              <span className="text-brand-gold">
                {" "}
                your next chapter.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-brand-muted sm:mt-7 sm:text-lg sm:leading-8">
              Professional development is an ongoing process. Reflection,
              learning and deliberate improvement can help people strengthen
              the capabilities they rely on every day.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-7
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                bg-brand-navy
                px-7
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-brand-yellow
                hover:text-brand-black
                sm:mt-9
                sm:w-auto
                sm:text-sm
                sm:tracking-[0.15em]
              "
            >
              <span>Start a Conversation</span>

              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          PROFILE CTA
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-brand-navy py-16 sm:py-24 lg:py-32">
        {/* Decorative yellow circle */}

        <motion.div
          className="pointer-events-none absolute -right-48 -top-48 h-[400px] w-[400px] rounded-full bg-brand-yellow sm:-right-40 sm:-top-40 sm:h-[500px] sm:w-[500px]"
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow sm:text-xs sm:tracking-[0.3em]">
              Continue Exploring
            </p>

            <h2 className="mt-5 font-display text-[2rem] leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Discover the work behind
              <span className="block text-brand-yellow">
                the profile.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
              Explore workshops, professional engagements and opportunities
              to connect with R.A. Nadesan.
            </p>

            <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Link
                to="/workshop"
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-brand-yellow
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-brand-black
                  transition-all
                  duration-300
                  hover:bg-white
                  sm:w-auto
                  sm:text-sm
                "
              >
                <span>View Workshops</span>

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  border
                  border-white/30
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-brand-yellow
                  hover:bg-brand-yellow
                  hover:text-brand-black
                  sm:w-auto
                  sm:text-sm
                "
              >
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}