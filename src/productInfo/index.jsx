import { scrollObserver } from "../common/slideObserver";

const ProductInformation = () => {
  const eleIn1 = scrollObserver("productInfo1");
  const eleIn2 = scrollObserver("productInfo2");

  return (
    <section className="relative md:top-10 lg:top-10 xl:top-20 px-9 w-full">
      <div className="w-full">
        <div
          className={`flex justify-start ${eleIn1 && "animate-slideUp1"}`}
          id="productInfo1"
        >
          <h1 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            Learning Type Design
          </h1>
        </div>
        <div
          className={`flex justify-start ${eleIn2 && "animate-slideUp1"}`}
          id="productInfo2"
        >
          <h1 className="text-red text-4xl lg:text-6xl font-extrabold font-oldStandard uppercase tracking-tighter xl:text-7xl">
            Has Never Been So Easy
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <div className="grid col-span-1">
          <p className="text-2xl leading-6 text-red font-normal xl:text-4xl">
            But there are so many different informations all around that the
            process of learning how to design fonts can become super hard!
          </p>
        </div>
        <div className="grid col-span-1">
          <p className="text-2xl leading-6 text-red font-normal xl:text-4xl">
            That’s why we created this guide especially for designers like you
            who want to create their own fonts and typeface families!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
