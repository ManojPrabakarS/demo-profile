import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}) {
  const positions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...positions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}