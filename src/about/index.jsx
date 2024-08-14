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
   
  const { scrollY  } = useScroll();
  
  useMotionValueEvent(scrollY , "change", (latest) => {
    setIntroImgSlide(latest)
  })

 const handleImageTranslate = (position) => {
   const yScroll = introImgSlide/4;
   const translate = position - yScroll < 0? 0: position - yScroll;

   return translate
 }

  return (
    <section className="pt-64 px-9 w-full">
      <div className="px-5">
        <div
          className={`w-full flex justify-start ${
            eleIn1 && "animate-slideUp1"
          }`}
          id="about1"
        >
          <h2 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Ever Wanted to Design
          </h2>
        </div>
        <div
          className={`w-full flex justify-start ${
            eleIn2 && "animate-slideUp1"
          }`}
          id="about2"
        >
          <h2 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Your Own Font?
          </h2>
        </div>
      </div>
      <div className="flex h-14 items-center w-full my-10 overflow-hidden border-t-2 border-b-2 border-red mask">
        <ul className="flex">
          {xAnimate.map((ani, index) => (
            <li
              key={index}
              className="text-red text-3xl font-semibold mx-10 whitespace-nowrap"
            >
              {ani}
            </li>
          ))}
          {xAnimate.map((ani, index) => (
            <li
              key={index}
              className="text-red text-3xl font-semibold mx-10 whitespace-nowrap"
            >
              {ani}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 my-16">
        <div className="grid col-span-1 ">
          <motion.div
            initial={{ translateY: 100 }}
            animate={{
              translateY: handleImageTranslate(400),
            }}
          >
            <img
              ref={introRef}
              src="https://framerusercontent.com/images/VdKz2RPUzGEW0ET6YRa5IiYNuQ.webp"
              alt="Blaze Type: How To Design Fonts?"
              className={`w-3/4`}
            />
          </motion.div>
          <div className="text-red text-2xl font-normal my-3">
            Become a Font Designer
          </div>
        </div>
        <div className="grid col-span-1">
          <div className="text-4xl text-red font-normal">
            Whether experienced or beginner: learn everything you need to know
            to design fonts from A to Z. From sketching to design and
            production, you’ll master all the skills to become a professional
            font designer.
          </div>
          <div className="uppercase border-red border-2 flex justify-center items-center rounded-full h-12 w-2/4 ml-auto text-right">
            <span className="text-4xl font-semibold text-red">
              Get The book
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
