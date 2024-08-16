import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const ProductDisplay = () => {
  const scrollContainerRef = useRef(null);
  const isInView = useInView(scrollContainerRef);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const onWheel = (event) => {
      // If the element is scrollable horizontally
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        if (scrollContainer.scrollLeft === 0 && event.deltaY < 0) {
          // If at the beginning of the horizontal scroll and trying to scroll up, allow vertical scroll
          return;
        }

        if (
          scrollContainer.scrollLeft ===
            scrollContainer.scrollWidth - scrollContainer.clientWidth &&
          event.deltaY > 0
        ) {
          // If at the end of the horizontal scroll and trying to scroll down, allow vertical scroll
          return;
        }
        scrollContainer.scrollIntoView({ behavior: "smooth" });

        // Otherwise, scroll horizontally
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      }
    };

    scrollContainer.addEventListener("wheel", onWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, [isInView]);

  return (
    <section className="pt-14 px-9 lg:mt-40 md:mt-40 w-full h-svh">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 p-4"
      >
        <div className="min-h-60 min-w-80 p-5 xl:min-w-[800px] xl:p-16 bg-black flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/ptQqpTVDZsXub82fDGM7SuYT9u0.webp"
            className="h-full w-full"
          />
        </div>
        <div className="min-h-60 min-w-80 xl:min-w-[800px]">
          <img
            src="https://framerusercontent.com/images/nUCubJRewbpnYV5PauZzoiKc9c8.webp"
            className="h-full w-full"
          />
        </div>
        <div className="min-h-60 min-w-80 p-5 xl:min-w-[800px] xl:p-16 bg-black flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/JzfvEO5S5FHXI83gjCTvpI01mgw.webp"
            className="h-full w-full"
          />
        </div>
        <div className="min-h-60 min-w-80 xl:min-w-[800px]">
          <img
            src="https://framerusercontent.com/images/RRd0Ma6Yu7VCqLA7GebZuHBeaU.webp"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
