import { ISplash } from "@/utils/interfaces";
import ProductImage from "./ProductImage";
import Price from "./Price";
import { useRouter } from "next/router";
import AddToCart from "../Cart/AddToCart";

function Splash({ image, isNew, name, description, price, slug, id }: ISplash) {
  const router = useRouter();
  return (
    <article className="grid gap-10 md:grid-cols-2">
      <div className="grid gap-10">
        <p onClick={() => router.back()} className="opacity-50 cursor-pointer">
          Go Back
        </p>
        <ProductImage image={image} />
      </div>
      <div className="grid gap-9 md:place-content-center">
        <div className="grid gap-5">
          {isNew ? <p className="outline text-D87D4A">New Product</p> : null}
          <h2 className="w-56 lg:w-80">{name}</h2>
        </div>
        <p className="w-80 lg:w-150 opacity-50">{description}</p>
        <Price price={price} />
        <AddToCart
          productName={slug}
          id={id}
          price={price}
          image={image.desktop}
        />
      </div>
    </article>
  );
}

export default Splash;
