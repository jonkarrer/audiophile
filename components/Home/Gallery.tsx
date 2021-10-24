const Gallery = () => (
  <section>
    <div className="wrapper grid gap-6">
      {/** Orange panel, Zx9 speaker */}
      <article className="bg-D87D4A relative grid gap-12 place-items-center py-16 rounded-lg overflow-hidden">
        <Circles />
        <img
          className="w-44 z-10"
          src="/home/mobile/image-speaker-zx9.png"
          alt="speaker"
        />
        <div className="grid gap-10 place-items-center">
          <h1 className="text-white text-center w-44 z-10 md:w-64">
            zx9 speaker
          </h1>
          <p className="text-white light text-center z-10 w-72">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn black z-10">See Product</button>
        </div>
      </article>
      {/** Zx7 Speaker */}
      <article className="bg-/home/mobile/image-speaker-zx7 bg-cover h-80 rounded-lg grid gap-9 place-content-center justify-start px-6 md:bg-/home/tablet/image-speaker-zx7 md:px-16">
        <h2>zx7 speaker</h2>
        <button className="btn bg-none border-2 border-black">
          see product
        </button>
      </article>
      {/** Yx1 Earphones */}
      <div className="grid gap-6 md:flex md:gap-0 md:space-x-2">
        <div className="rounded-lg bg-/home/mobile/image-earphones-yx1 bg-cover h-52 w-full md:bg-/home/tablet/image-earphones-yx1 md:h-80 md:flex-1"></div>
        <article className="rounded-lg grid gap-9 place-content-center justify-start px-6 bg-F1F1F1 h-52 md:h-80 md:w-1/2 md:px-16">
          <h2>yx1 earphones</h2>
          <button className="btn bg-none border-2 border-black">
            see product
          </button>
        </article>
      </div>
    </div>
  </section>
);

export default Gallery;

const Circles = () => {
  return (
    <svg
      className="absolute transform -translate-y-1/4 scale-65 md:scale-90 md:-translate-y-40"
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
