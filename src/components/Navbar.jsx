import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Workshop", path: "/workshop" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#1E2B5B]/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-[1250px] mx-auto px-6">

        <div className="h-[82px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold">
            <span className="text-white">The</span>
            <span className="text-[#FDC210] ml-2">Narrative Edge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="relative py-3"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.18em] transition ${
                        isActive
                          ? "text-[#FDC210]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FDC210]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#FDC210] text-[#010204] px-5 py-3 font-bold text-sm hover:bg-[#D9A900] transition"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#111A3A] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6">

              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-white border-b border-white/10 uppercase tracking-[0.18em] text-sm"
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-6 bg-[#FDC210] text-[#010204] py-4 font-bold"
              >
                Let's Talk
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}