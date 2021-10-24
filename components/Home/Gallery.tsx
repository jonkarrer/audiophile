const Gallery = () => (
  <section>
    <div className="wrapper grid gap-6 lg:gap-12">
      <OrangePanel />
      <GreyPanel />
      <Earphones />
    </div>
  </section>
);
export default Gallery;

const Circles = () => {
  return (
    <svg
      className="absolute transform -translate-y-1/4 scale-65 md:scale-90 md:-translate-y-40 lg:-translate-x-56 lg:translate-y-40 lg:scale-105"
      width="944"
      height="944"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#FFF" fill="none" opacity=".202">
        <circle cx="472" cy="472" r="235.5" />
        <circle cx="472" cy="472" r="270.5" />
        <circle cx="472" cy="472" r="471.5" />
      </g>
    </svg>
  );
};
const OrangePanel = () => (
  <article className="bg-D87D4A relative grid gap-12 place-items-center py-16 rounded-lg overflow-hidden lg:flex lg:justify-evenly">
    <Circles />
    <img
      className="w-44 z-10 lg:w-100 lg:transform lg:translate-y-20"
      src="/home/desktop/image-speaker-zx9.png"
      alt="speaker"
    />
    <div className="grid gap-10 place-items-center text-center lg:place-items-start lg:text-left">
      <h1 className="text-white w-44 z-10 md:w-64">zx9 speaker</h1>
      <p className="text-white light  z-10 w-72">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button className="btn black z-10">See Product</button>
    </div>
  </article>
);

const GreyPanel = () => (
  <article className="bg-/home/mobile/image-speaker-zx7 bg-cover h-80 rounded-lg grid gap-9 place-content-center justify-start px-6 md:bg-/home/tablet/image-speaker-zx7 md:px-16 lg:bg-/home/desktop/image-speaker-zx7">
    <h2 className="text-2xl">zx7 speaker</h2>
    <button className="btn bg-none border-2 border-black">see product</button>
  </article>
);

const Earphones = () => (
  <div className="grid gap-6 md:flex md:gap-0 md:space-x-2 lg:space-x-6">
    <div className="rounded-lg bg-/home/mobile/image-earphones-yx1 bg-cover h-52 w-full md:bg-/home/tablet/image-earphones-yx1 md:h-80 md:flex-1 lg:bg-/home/desktop/image-earphones-yx1"></div>
    <article className="rounded-lg grid gap-9 place-content-center justify-start px-6 bg-F1F1F1 h-52 md:h-80 md:w-1/2 md:px-16">
      <h2 className="text-2xl">yx1 earphones</h2>
      <button className="btn bg-none border-2 border-black">see product</button>
    </article>
  </div>
);
