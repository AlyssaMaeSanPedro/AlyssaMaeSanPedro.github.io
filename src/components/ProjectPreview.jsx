import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1];

// wipes the image in from left to right when it scrolls into view
export default function ProjectPreview({ src, alt }) {
  const ref = useRef();
  const seen = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ display: "block", width: "100%" }}
        initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.05 }}
        animate={seen ? { clipPath: "inset(0 0% 0 0)", scale: 1 } : {}}
        transition={{ duration: 1, ease }}
      />
    </div>
  );
}
