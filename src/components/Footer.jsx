import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-brand-navy text-white">
      {/* =========================================================
          TOP CTA SECTION (YELLOW HIGHLIGHT ON DEEP NAVY)
      ========================================================= */}
      <section className="w-full border-b border-white/10 bg-[#0F1B3E]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-yellow">
                Let's Connect
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Start a conversation{" "}
                <span className="text-brand-yellow">
                  that matters.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-md
                bg-brand-yellow
                px-6
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-brand-navy
                shadow-md
                transition-all
                duration-300
                hover:bg-white
                hover:text-brand-navy
                hover:shadow-lg
                w-fit
              "
            >
              <span>Get in Touch</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          MINIMALIST CONTEXT & BOTTOM STRIP
      ========================================================= */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Context Summary */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-2xl font-bold tracking-wide text-white">
              R.A. <span className="text-brand-yellow">Nadesan</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Empowering senior leaders, executives, and organizations through bespoke workshops,{" "}
              <span className="font-semibold text-brand-yellow">business storytelling</span>, design thinking, and high-impact communication strategy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]">
            <span className="text-white">Leadership</span>
            <span className="text-brand-yellow">•</span>
            <span className="text-brand-yellow">Storytelling</span>
            <span className="text-brand-yellow">•</span>
            <span className="text-white">Transformation</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} <span className="font-semibold text-white">R.A. Nadesan</span>. All rights reserved.
          </p>

          <p className="text-xs text-white/70">
            Website by{" "}
            <a
              href="https://classydigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-yellow transition-colors duration-200 hover:text-white hover:underline"
            >
              Classy Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}