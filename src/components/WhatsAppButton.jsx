import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "9894170320"; // Placeholder: update with actual WhatsApp number
  const message = encodeURIComponent(
    "Hello R.A. Nadesan, I would like to connect with you regarding leadership coaching & workshops."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 focus:outline-none sm:h-14 sm:w-14"
    >
      {/* Subtle pulse ripple */}
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366] opacity-25 animate-ping" />

      {/* WhatsApp SVG Icon scaled to fit the button */}
      <svg
        viewBox="0 0 24 24"
        className="relative z-10 h-8 w-8 fill-white sm:h-9 sm:w-9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.22 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z" />
      </svg>

      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-brand-navy px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
