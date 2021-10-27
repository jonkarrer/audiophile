import { IGallery } from "@/utils/interfaces";

function Gallery({ gallery }: { gallery: IGallery }) {
  const { first, second, third } = gallery;

  const imgOneBase = first.desktop.split("/").slice(2).join("/");

  const imgTwoBase = second.desktop.split("/").slice(2).join("/");

  const imgThreeBase = third.desktop.split("/").slice(2).join("/");

  return (
    <div className="grid gap-5 md:grid-cols-2 md:grid-rows-2 ">
      <img
        className="rounded-lg w-full md:col-start-1 md:row-start-1 "
        src={`/${imgOneBase}`}
        alt="first gallery image"
      />
      <img
        className="rounded-lg w-full md:col-start-1 md:row-start-2"
        src={`/${imgTwoBase}`}
        alt="first gallery image"
      />

      <img
        className="rounded-lg object-cover h-full md:col-start-2 md:row-start-1 md:row-span-2"
        src={`/${imgThreeBase}`}
        alt="first gallery image"
      />
    </div>
  );
}

export default Gallery;
