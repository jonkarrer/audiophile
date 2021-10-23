import React from "react";

const Hero = () => (
  <section>
    <div className="wrapper">
      <article className="grid gap-11 place-items-center">
        <img
          className="rounded-lg"
          src="/shared/mobile/image-best-gear.jpg"
          alt="guy with headphones on"
        />
        <h2 className="text-center w-80">
          bringing you the <span className="text-D87D4A">best</span> audio gear
        </h2>
        <p className="text-center opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
    </div>
  </section>
);

export default Hero;
