import ArrowBtn from "./ArrowBtn";

export default function Catagories() {
  return (
    <div className="grid gap-4 md:flex md:gap-0 md:space-x-4">
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
  <div className="grid place-items-center pb-4 relative md:w-56">
    <div className="w-full h-3/4 absolute rounded-lg bottom-0 bg-F1F1F1"></div>
    <img
      className={`w-40 z-10 place-self-end justify-self-center 
      ${last ? "w-44" : ""}  `}
      src={img}
      alt="catagory image"
    />

    <span
      className="text-base font-bold uppercase mb-4 z-10"
      style={{ letterSpacing: "1.07px" }}
    >
      {title}
    </span>

    <div className="z-10">
      <ArrowBtn action="shop" link="/" />
    </div>
  </div>
);

// px-6 bg-white w-screen rounded-b-lg
