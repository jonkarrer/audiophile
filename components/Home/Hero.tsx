import React from "react";

const Hero = () => (
  <section>
    <div className="wrapper">
      <article className="grid gap-11 text-center place-items-center lg:grid-cols-2 lg:text-left">
        <div className="bg-/shared/mobile/image-best-gear bg-cover h-80 w-full md:bg-/shared/tablet/image-best-gear lg:bg-/shared/desktop/image-best-gear lg:h-588 lg:col-start-2"></div>
        <div className="grid gap-11 lg:gap-6 lg:col-start-1 lg:row-start-1">
          <h2 className="w-80 md:text-5xl md:w-3/4 ">
            bringing you the <span className="text-D87D4A">best</span> audio
            gear
          </h2>
          <p className="opacity-50 md:w-3/4 ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </article>
    </div>
  </section>
);

export default Hero;
