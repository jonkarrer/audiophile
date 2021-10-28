import type { NextPage } from "next";

import Link from "next/link";

const Splash: NextPage = () => (
  <section className="splash max-h-base lg:max-h-2xl h-screen bg-header-mobile bg-cover bg-center md:bg-header-tablet lg:bg-header-desktop">
    <div className="wrapper flex justify-center items-center h-full lg:justify-start">
      <article className="grid gap-6 text-center lg:text-left lg:gap-9">
        <div className="grid gap-4 place-items-center lg:place-items-start">
          <p className="outline light ">New Product</p>
          <h1 className="text-white w-96">xx99 Mark II Headphones</h1>
        </div>
        <p className="light w-81 md:w-1/2 m-auto lg:m-0 lg:w-81">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link passHref href="/products/xx99-mark-two-headphones">
          <button className="btn gold m-auto lg:m-0">See Product</button>
        </Link>
      </article>
    </div>
  </section>
);

export default Splash;
