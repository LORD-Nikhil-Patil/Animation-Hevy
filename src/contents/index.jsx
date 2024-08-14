const Contents = () => {
  return (
    <section className="px-9 min-h-svh">
      <div className="absolute -z-10  h-full w-1/3 flex items-center">
        <div className="flex flex-col">
          <h3 className="uppercase text-red text-7xl font-black font-oldStandard tracking-tighter">Learn</h3>
          <h3 className="uppercase">think</h3>
          <h3 className="uppercase text-red text-7xl font-black font-oldStandard tracking-tighter">Learn</h3>
          <h3 className="uppercase text-red text-7xl font-black font-oldStandard tracking-tighter">Learn</h3>
          <h3 className="uppercase text-red text-8xl font-[2000] font-oldStandard tracking-tighter">Learn</h3>

        </div>
      </div>
      <div className="h-svh overflow-y-auto space-y-4">
        <div className="w-2/3 ml-auto text-right">
          <div className="flex items-center justify-center p-16 bg-black">
            <img
              src="https://framerusercontent.com/images/ptQqpTVDZsXub82fDGM7SuYT9u0.webp"
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center justify-center p-16 bg-black">
            <img
              src="https://framerusercontent.com/images/ptQqpTVDZsXub82fDGM7SuYT9u0.webp"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
