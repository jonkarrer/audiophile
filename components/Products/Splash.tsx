import { ISplash } from "@/utils/interfaces";
import CategoryImage from "./CategoryImage";

function Splash({ categoryImage, isNew, name, description }: ISplash) {
  return (
    <article>
      <CategoryImage image={categoryImage} />
      {isNew ? <p className="outline light text-D87D4A">New Product</p> : null}
      <h2 className="w-52">{name}</h2>
      <p className="w-80 md:w-558 lg:w-150 opacity-50">{description}</p>
    </article>
  );
}

export default Splash;
