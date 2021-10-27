import Catagories from "@/components/lib/Catagories";
import { useEffect, useState } from "react";

const Headphones = () => {
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
        <h2 className="text-white mb-7 md:mb-24 md:text-5xl">headphones</h2>
      </section>
      <section>
        <div className="wrapper grid gap-32">
          <article className="grid gap-10 place-items-center text-center lg:text-left lg:grid-cols-2 lg:gap-32">
            <img
              src={`/product-xx99-mark-two-headphones/${image}/image-category-page-preview.jpg`}
              alt="xx99 mark two headphones"
            />
            <div className="grid gap-10 place-items-center lg:place-items-start">
              <p className="outline light text-D87D4A">New Product</p>
              <h2 className="w-80">xx99 mark II Headphones</h2>
              <p className="w-80 md:w-558 lg:w-150 opacity-50">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <button className="btn gold">see product</button>
            </div>
          </article>

          <article className="grid gap-10 place-items-center text-center lg:text-left lg:grid-cols-2 lg:gap-32">
            <img
              className="lg:col-start-2"
              src={`/product-xx99-mark-one-headphones/${image}/image-category-page-preview.jpg`}
              alt="xx99 mark one headphones"
            />
            <div className="grid gap-10 place-items-center lg:place-items-start lg:col-start-1 lg:row-start-1 lg:justify-self-start">
              <h2 className="w-80">XX99 Mark I Headphones</h2>
              <p className="w-80 md:w-558 lg:w-125">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <button className="btn gold">see product</button>
            </div>
          </article>

          <article className="grid gap-10 place-items-center text-center lg:text-left lg:grid-cols-2 lg:gap-32">
            <img
              src={`/product-xx59-headphones/${image}/image-category-page-preview.jpg`}
              alt=""
            />
            <div className="grid gap-10 place-items-center lg:place-items-start">
              <h2 className="w-64">xx59 Headphones</h2>
              <p className="w-80 md:w-558 lg:w-150">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <button className="btn gold">see product</button>
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
export default Headphones;
