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
    <section className="pt-10 px-9 w-full">
      <div className="">
        <div
          className={`flex justify-start ${eleIn1 && "animate-slideUp1"}`}
          id="info1"
        >
          <h1 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            All You Need to Know to
          </h1>
        </div>
        <div
          className={`flex justify-start ${eleIn2 && "animate-slideUp1"}`}
          id="info2"
        >
          <h1 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            Design Fonts like a Pro
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 z-20">
        <div className="grid col-span-1">
          <p className="text-xl leading-6 text-red font-normal lg:text-2xl lg:my-12 md:text-xl md:font-normal xl:text-4xl xl:w-5/6 xl:mt-14">
            OVER 10 YEARS OF EXPERTISE TO TEACH YOU EVERYTHING ABOUT
            <span className="font-bold mx-1">FONT DESIGN</span> AND
            <span className="font-bold mx-1">TYPEFACE PRODUCTION</span>
          </p>
        </div>
        <motion.div
          initial={{ translateY: 100 }}
          animate={{
            translateY: handleImageTranslate(550),
          }}
          className="grid col-span-1 h-full text-end -z-10"
        >
          <div className="w-full bg-black py-8 px-10 flex items-center justify-center md:py-16 md:px-16">
            <img
              src="https://framerusercontent.com/images/J9uHvuNn3lWx4R33NXJf2ntDVQM.webp"
              alt="Blaze Type: How To Design Fonts?"
              className={""}
            />
          </div>
          <div className="text-red text-1xl font-normal my-3 mr-auto">
            Master Type Anatomy
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
