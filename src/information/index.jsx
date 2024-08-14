import { useState, useRef } from "react";
import { scrollObserver } from "../common/slideObserver";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

const Information = () => {
  const eleIn1 = scrollObserver("info1");
  const eleIn2 = scrollObserver("info2");

  const [introImgSlide, setIntroImgSlide] = useState(25);
  const introRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIntroImgSlide(latest);
  });

  const handleImageTranslate = (position) => {
    const yScroll = introImgSlide / 4;
    const translate = position - yScroll < 0 ? 0 : position - yScroll;

    return translate;
  };

  return (
    <section className="pt-10 px-9 w-full h-svh">
      <div className="px-5">
        <div
          className={`flex justify-start ${eleIn1 && "animate-slideUp1"}`}
          id="info1"
        >
          <h1 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            All You Need to Know to
          </h1>
        </div>
        <div
          className={`flex justify-start ${eleIn2 && "animate-slideUp1"}`}
          id="info2"
        >
          <h1 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Design Fonts like a Pro
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 my-16">
        <div className="grid col-span-1">
          <p className="text-4xl text-red font-normal w-3/4">
            OVER 10 YEARS OF EXPERTISE TO TEACH YOU EVERYTHING ABOUT
            <span className="font-bold mx-1">FONT DESIGN</span> AND
            <span className="font-bold mx-1">TYPEFACE PRODUCTION</span>
          </p>
        </div>
        <div className="grid col-span-1 h-full text-end">
          <motion.div
            initial={{ translateY: 100 }}
            animate={{
              translateY: handleImageTranslate(550),
            }}
            className="w-full min-h-96 bg-black flex items-center justify-center"
          >
            <img
              src="https://framerusercontent.com/images/J9uHvuNn3lWx4R33NXJf2ntDVQM.webp"
              alt="Blaze Type: How To Design Fonts?"
              className={`w-3/4`}
            />
            
          </motion.div>
          <div className="text-red text-2xl font-normal my-3 mr-auto">
            Become a Font Designer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
