import { useState, useRef } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

import {ContentItem} from "./contentItem"
const Contents = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const commonEleOne = useRef(null);

  const {scrollYProgress } = useScroll({
    target: commonEleOne,
    offset: ["end end", "start start"]
});
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollHeight(Math.floor(latest * 100))
  });

  const contentImg1 = "https://framerusercontent.com/images/uNesNU3I6t5A5VubqCtclN2vBNI.webp"
  const contentImg2 = "https://framerusercontent.com/images/CBl3CQl0PFWyz5UppMM15TPCas.webp"
  const contentImg3 = "https://framerusercontent.com/images/7ESfs2EbGzdg1xse8K88TQiJEjo.webp"
  const contentImg4 = "https://framerusercontent.com/images/HfsDRKXCjZbpFe0arL1UR13fZlI.webp"
  const contentImg5 = "https://framerusercontent.com/images/0MmnsoobvIXs37IPuRZrDmTbRQ.webp"
  return (
    <section className="px-9">
      <div className="flex justify-between">
        <div className="sticky h-80 top-36 flex items-center w-1/3">
          <div className="flex flex-col">
            <h3 className={`uppercase ${scrollHeight >= 90 ? "text-red text-7xl ml-5" : "text-gray text-6xl hover:text-black"} font-extrabold font-oldStandard tracking-tighter`}>
              Learn
            </h3>
            <h3 className={`uppercase ${scrollHeight >= 70 &&  scrollHeight <= 80? "text-red text-7xl ml-5" : "text-gray text-6xl hover:text-black"} font-extrabold font-oldStandard tracking-tighter`}>
              Think
            </h3>
            <h3 className={`uppercase ${scrollHeight >= 47 &&  scrollHeight <= 70? "text-red text-7xl ml-5" : "text-gray text-6xl hover:text-black"} font-extrabold font-oldStandard tracking-tighter`}>
              Sketch
            </h3>
            <h3 className={`uppercase ${scrollHeight >= 24 &&  scrollHeight <= 43? "text-red text-7xl ml-5" : "text-gray text-6xl hover:text-black"} font-extrabold font-oldStandard tracking-tighter`}>
              Design
            </h3>
            <h3 className={`uppercase  ${scrollHeight <= 20? "text-red text-7xl ml-5" : "text-gray text-6xl hover:text-black"} font-extrabold font-oldStandard tracking-tighter`}>
              Produce
            </h3>
          </div>
        </div>
        <div ref={commonEleOne} className="w-2/3 ml-auto">
          <ContentItem img={contentImg1}/>
          <ContentItem img={contentImg2}/>
          <ContentItem img={contentImg3}/>
          <ContentItem img={contentImg4}/>
          <ContentItem img={contentImg5}/>
        </div>
      </div>
    </section>
  );
};

export default Contents;
