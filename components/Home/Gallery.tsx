const Gallery = () => (
  <section>
    <div className="wrapper">
      <article className="bg-D87D4A relative grid gap-12 place-items-center py-16 rounded-lg overflow-hidden">
        <Circles />
        <img
          className="w-44 z-10"
          src="/home/mobile/image-speaker-zx9.png"
          alt="speaker"
        />
        <div className="grid gap-10 place-items-center">
          <h1 className="text-white text-center w-44 z-10">zx9 speaker</h1>
          <p className="text-white light text-center z-10 w-72">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn black z-10">See Product</button>
        </div>
      </article>
    </div>
  </section>
);

const Circles = () => (
  <svg
    className="absolute"
    style={{ transform: "scale(0.7) translateY(-22%)" }}
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

export default Gallery;
