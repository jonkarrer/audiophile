import ArrowBtn from "./ArrowBtn";

export default function Catagories() {
  return (
    <div className="grid gap-4 md:flex md:gap-0 md:justify-between md:w-full">
      <Item
        img="/shared/desktop/image-category-thumbnail-headphones.png"
        title="Headphones"
        last={false}
      />
      <Item
        img="/shared/desktop/image-category-thumbnail-speakers.png"
        title="Speakers"
        last={false}
      />
      <Item
        img="/shared/desktop/image-category-thumbnail-earphones.png"
        title="Earphones"
        last={true}
      />
    </div>
  );
}

const Item = ({
  img,
  title,
  last,
}: {
  img: string;
  title: string;
  last: boolean;
}) => (
  <div className="grid place-items-center pb-8 relative md:w-56 lg:w-80 xl:w-82">
    <div className="w-full h-3/4 absolute rounded-lg bottom-0 bg-F1F1F1"></div>
    <img
      className={`w-40 z-10 place-self-end justify-self-center lg:w-52 lg:h-48 
      ${last ? "w-44 md:w-56" : ""}  `}
      src={img}
      alt="catagory image"
    />

    <span
      className="text-base font-bold uppercase mb-4 z-10 lg:text-lg"
      style={{ letterSpacing: "1.1px" }}
    >
      {title}
    </span>

    <div className="z-10">
      <ArrowBtn action="shop" link="/" />
    </div>
  </div>
);

// px-6 bg-white w-screen rounded-b-lg
