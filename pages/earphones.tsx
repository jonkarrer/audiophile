import Catagories from "@/components/lib/Catagories";
import { useEffect, useState } from "react";
import Link from "next/link";

const Earphones = () => {
  const [image, setImage] = useState("desktop");
  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setImage("tablet");
      } else {
        setImage("desktop");
      }
    };
    checkWindowWidth();
    window.onresize = () => checkWindowWidth();
  });
  return (
    <main>
      <section className="h-48 bg-101010 flex justify-center items-end p-0 md:h-81">
        <h2 className="text-white mb-7 md:mb-24 md:text-5xl">earphones</h2>
      </section>
      <section>
        <div className="wrapper grid gap-32">
          <article className="grid gap-10 place-items-center text-center lg:text-left lg:grid-cols-2 lg:gap-32">
            <img
              src={`/product-yx1-earphones/${image}/image-category-page-preview.jpg`}
              alt="xx99 mark two headphones"
            />
            <div className="grid gap-10 place-items-center lg:place-items-start">
              <p className="outline light text-D87D4A">New Product</p>
              <h2 className="w-80">Yx1 wireless earphones</h2>
              <p className="w-80 md:w-558 lg:w-150">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Link passHref href="products/yx1-earphones">
                <button className="btn gold">see product</button>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="wrapper">
          {" "}
          <Catagories />
        </div>
      </section>
    </main>
  );
};
export default Earphones;
