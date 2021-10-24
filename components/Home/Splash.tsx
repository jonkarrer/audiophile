const Splash = () => (
  <section className="splash h-screen bg-header-mobile bg-cover bg-center md:bg-header-tablet">
    <div className="wrapper flex justify-center items-center h-full">
      <article className="grid gap-6">
        <div className="grid gap-4">
          <p className="outline light text-center">New Product</p>
          <h1 className="text-white text-center">xx99 Mark II Headphones</h1>
        </div>
        <p className="light text-center md:w-1/2 md:m-auto">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="btn gold m-auto">See Product</button>
      </article>
    </div>
    <style jsx>{`
      .splash {
        max-height: 800px;
      }
      @media (min-width: 768px) {
        .splash {
          max-height: auto;
        }
      }
    `}</style>
  </section>
);

export default Splash;
