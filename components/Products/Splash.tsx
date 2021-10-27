import { ISplash } from "@/utils/interfaces";
import ProductImage from "./ProductImage";
import Price from "./Price";
function Splash({ image, isNew, name, description, price }: ISplash) {
  return (
    <article className="grid gap-10 md:grid-cols-2">
      <div className="grid gap-10">
        <p className="opacity-50 md">Go Back</p>
        <ProductImage image={image} />
      </div>
      <div className="grid gap-9 md:place-content-center">
        <div className="grid gap-5">
          {isNew ? <p className="outline text-D87D4A">New Product</p> : null}
          <h2 className="w-56 lg:w-80">{name}</h2>
        </div>
        <p className="w-80 lg:w-150 opacity-50">{description}</p>
        <Price price={price} />
      </div>
    </article>
  );
}

export default Splash;
