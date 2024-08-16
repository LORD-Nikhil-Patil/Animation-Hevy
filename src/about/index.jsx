import { useState, useRef } from "react";
import { scrollObserver } from "../common/slideObserver";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

const About = () => {
  const xAnimate = [
    "DESIGN FROM A TO Z",
    "●",
    "FOR LATIN EXTENDED LANGUAGES",
    "●",
    "ALL TIPS AND TRICKS TO DESIGN LIKE A PRO",
    "●",
    "USE OUR FREE TOOLS",
    "●",
    "GET STARTED",
    "●",
    "FOR FREE",
    "●",
  ];
  const eleIn1 = scrollObserver("about1");
  const eleIn2 = scrollObserver("about2");
  const [introImgSlide, setIntroImgSlide] = useState(25);
  const introRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIntroImgSlide(latest);
  });

  const handleImageTranslate = (position) => {
    const yScroll = introImgSlide / 3;
    const translate = position - yScroll < 0 ? 0 : position - yScroll;

    return translate;
  };

  return (
    <section className="pt-32 px-9 w-full lg:pt-64">
      <div className="md:px-5 ">
        <div
          className={`w-full flex justify-start ${
            eleIn1 && "animate-slideUp2"
          }`}
          id="about1"
        >
          <h2 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            Ever Wanted to Design
          </h2>
        </div>
        <div
          className={`w-full flex justify-start ${
            eleIn2 && "animate-slideUp2"
          }`}
          id="about2"
        >
          <h2 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            Your Own Font?
          </h2>
        </div>
      </div>
      <div className="flex h-14 items-center w-full my-3 overflow-hidden border-t-2 border-b-2 border-red mask">
        <ul className="flex xl:py-5">
          {xAnimate.map((ani, index) => (
            <li
              key={index}
              className="text-red text-2xl font-light whitespace-nowrap xl:font-normal mx-5 xl:text-4xl"
            >
              {ani}
            </li>
          ))}
          {xAnimate.map((ani, index) => (
            <li
              key={index}
              className="text-red text-2xl font-light whitespace-nowrap xl:font-normal mx-5 xl:text-4xl"
            >
              {ani}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="grid col-span-1">
          <motion.div
            initial={{ translateY: 100 }}
            animate={{
              translateY: handleImageTranslate(400),
            }}
            className="-z-10"
          >
            <img
              ref={introRef}
              src="https://framerusercontent.com/images/VdKz2RPUzGEW0ET6YRa5IiYNuQ.webp"
              alt="Blaze Type: How To Design Fonts?"
              className="xl:w-4/5"
            />
            <div className="text-red text-2xl font-normal my-3 xl:text-2xl">
              Become a Font Designer
            </div>
          </motion.div>
        </div>
        <div className="grid col-span-1 z-20 bg-white">
          <div className="text-2xl text-red font-normal xl:text-4xl">
            Whether experienced or beginner: learn everything you need to know
            to design fonts from A to Z. From sketching to design and
            production, you’ll master all the skills to become a professional
            font designer.
          </div>
          <div className="uppercase border-red border-2 flex justify-center items-center rounded-full h-14 w-full mt-3 xl:ml-auto xl:w-2/4">
            <span className="text-xl font-semibold text-red xl:text-4xl my-4">Get The book</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
