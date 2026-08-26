"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function SpotlightEffect() {
  const springConfig = { damping: 30, stiffness: 180 };
  const mouseX = useSpring(-1000, springConfig);
  const mouseY = useSpring(-1000, springConfig);

  useEffect(() => {
    // Only listen on fine pointer devices (desktop mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block">
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute -inset-px opacity-70"
        style={{
          background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(217, 151, 43, 0.07), transparent 75%)`,
        }}
      />
    </div>
  );
}
