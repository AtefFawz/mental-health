import { motion } from "framer-motion";

export default function FillEffectWrapper({
  children,
  duration = 2,
  direction = "left",
  gradient = "linear-gradient(90deg, #ff6a00, #ee0979)",
  borderRadius = "10px",
}) {
  let initial,
    animate,
    style = {};

  if (direction === "left" || direction === "right") {
    initial = { width: "0%" };
    animate = { width: "100%" };
    style = { top: 0, bottom: 0, [direction]: 0 };
  } else if (direction === "top" || direction === "bottom") {
    initial = { height: "0%" };
    animate = { height: "100%" };
    style = { left: 0, right: 0, [direction]: 0 };
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          background: gradient,
          borderRadius: borderRadius,
          zIndex: 0,
          ...style,
        }}
      />
    </div>
  );
}
