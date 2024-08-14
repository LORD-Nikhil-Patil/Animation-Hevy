const Hero = () => {
  return (
    <>
      <header className="w-full px-8 py-8">
        <div className="w-full flex flex-row">
          <div className="w-1/2 flex flex-row justify-between">
            <div className="">
              <p className="font-serifRegular text-red text-2xl">
                <a className="">Blaze Type Guide</a>
              </p>
            </div>
            <div className="pr-20">
              <p className="font-serifRegular text-red text-2xl ">
                <a>How To Design Fonts?</a>
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-row justify-end pr-4">
            <div className="w- flex justify-center rounded-full border-2 px-6 py-2 border-red ">
              <p className="font-serifRegular text-2xl text-red font-semibold">
                <a>GET THE BOOK</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full flex flex-col">
        <div className="w-full flex justify-center animate-slideUp1">
          <h3 className="text-red text-6xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Blaze Type Guide:
          </h3>
        </div>
        <div className="flex flex-row justify-center animate-slideUp2 ">
          <div className="flex items-end pb-2">
            <h1 className="nuance-italic text-[100px] w-30 font-semibold text-red ">
              Learn
            </h1>
          </div>
          <div>
            <h1 className="font-serifRegular text-[120px] font-bold text-red uppercase">
              How To
            </h1>
          </div>
        </div>
        <div className="animate-slideUp3 flex flex-row justify-center -mt-16">
          <h1 className="font-serifRegular text-[120px] font-bold text-red uppercase">
            design fonts
          </h1>
        </div>
        <div className="animate-slideUp4 flex flex-row justify-center -mt-16">
          <div className="flex items-end pb-2">
            <h1 className="nuance-italic text-[100px] w-30 font-semibold text-red ">
              Like a
            </h1>
          </div>
          <div className="ml-5">
            <h1 className="animate-slideUp2 font-serifRegular text-[120px] font-bold text-red uppercase">
              PRO
            </h1>
          </div>
        </div>
      </section>
      <section className="h-svh w-full">
        <div class="w-full h-full" name="Teaser Video">
          <video
            src="https://framerusercontent.com/assets/4nIz1R4Wypauq1i3oh4IyiHvg.mp4"
            loop
            autoPlay
            muted
            type="video/mp4"
          ></video>
        </div>
      </section>
    </>
  );
};

export default Hero;
