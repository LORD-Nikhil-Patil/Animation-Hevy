const Hero = () => {
  return (
    <>
      <header className="w-full px-4 py-4 xl:px-8 xl:py-8">
        <div className="w-full flex flex-row">
          <div className="w-1/2 flex flex-row justify-between">
            <div className="flex items-center">
              <p className="font-serifRegular text-red text-lg xl:text-2xl">
                <a className="">Blaze Type Guide</a>
              </p>
            </div>
            <div className="hidden xl:block pr-20">
            <div className="h-full flex items-center">
              <p className="font-serifRegular text-red text-2xl md:text-2xl">
                <a className="">How To Design Fonts?</a>
              </p>
            </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-row justify-end xl:pr-4">
            <div className="flex justify-center rounded-full border-2 px-6 py-2 border-red ">
              <p className="font-serifRegular text-red font-semibold lg:text-lg xl:text-2xl">
                <a>GET THE BOOK</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full min-h-96 flex flex-col items-center">
        <div className="relative top-14 w-full flex justify-center animate-slideUp1">
          <h3 className="text-red text-3xl font-black font-oldStandard uppercase tracking-tighter lg:text-4xl">
            Blaze Type Guide:
          </h3>
        </div>
        <div className="relative top-20 flex flex-row justify-center animate-slideUp2">
          <div className="flex items-end">
            <h1 className="nuance-italic text-4xl w-30 font-medium text-red lg:text-7xl">
              Learn
            </h1>
          </div>
          <div>
            <h1 className="font-serifRegular ml-2 text-5xl font-bold text-red uppercase lg:text-8xl">
              How To
            </h1>
          </div>
        </div>
        <div className="relative top-16 mt-2 animate-slideUp3 flex flex-row justify-center">
          <h1 className="font-serifRegular text-5xl font-bold text-red uppercase lg:text-8xl">
            design fonts
          </h1>
        </div>
        <div className="relative top-16 animate-slideUp4 flex flex-row justify-center">
          <div className="flex items-end">
            <h1 className="nuance-italic mb-1 text-4xl w-30 text-red lg:text-7xl">
              Like a
            </h1>
          </div>
          <div className="ml-3 flex items-end">
            <h1 className="animate-slideUp2 font-serifRegular text-5xl font-bold text-red uppercase lg:text-8xl">
              PRO
            </h1>
          </div>
        </div>
      </section>
      <section className="h-svh w-full overflow-hidden mt-10">
        <div class="flex items-center space-y-6 w-full h-full" name="Teaser Video">
          <video
            src="https://framerusercontent.com/assets/4nIz1R4Wypauq1i3oh4IyiHvg.mp4"
            loop
            autoPlay
            muted
            type="video/mp4"
            className="w-auto h-auto min-h-svh object-fill"
          ></video>
        </div>
      </section>
    </>
  );
};

export default Hero;
