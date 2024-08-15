import { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

export const ContentItem = ({img}) => {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });
  console.log("scroll", scroll, 80 - scroll * 100)
  return (
    <motion.div
      ref={ref}
      className={`flex items-center justify-center p-16 my-10 bg-black`}
      initial={{ translateX: 0 }}
            animate={{
              translateX: 80 - scroll * 100,
            }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
    >
      <img
        src={img}
        className="h-full w-full"
      />
    </motion.div>
  );
};
