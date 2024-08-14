import { scrollObserver } from "../common/slideObserver";

const ProductInformation = () => {
  const eleIn1 = scrollObserver("productInfo1");
  const eleIn2 = scrollObserver("productInfo2");

  return (
    <section className="pt-28 px-9 w-full">
      <div className="w-full">
        <div
          className={`flex justify-start ${eleIn1 && "animate-slideUp1"}`}
          id="productInfo1"
        >
          <h1 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Learning Type Design
          </h1>
        </div>
        <div
          className={`flex justify-start ${eleIn2 && "animate-slideUp1"}`}
          id="productInfo2"
        >
          <h1 className="text-red text-7xl font-extrabold font-oldStandard uppercase tracking-tighter">
            Has Never Been So Easy
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-16">
        <div className="grid col-span-1">
          <p className="text-4xl text-red font-normal">
            But there are so many different informations all around that the
            process of learning how to design fonts can become super hard!
          </p>
        </div>
        <div className="grid col-span-1">
          <p className="text-4xl text-red font-normal">
            That’s why we created this guide especially for designers like you
            who want to create their own fonts and typeface families!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
