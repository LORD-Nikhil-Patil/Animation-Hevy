import { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

export const ContentItem = ({img, small=100}) => {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });
  console.log("scroll", scroll * 500, 400 - (scroll * 400))
  return (
    <motion.div
      ref={ref}
      className={`p-10 lg:w-11/12 flex items-center justify-center lg:p-16 my-10 bg-black`}
      initial={{ translateX: 400 }}
            animate={{
              translateX: 490 - (scroll * 400),
              translateY: 200
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
