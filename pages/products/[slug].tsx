import { GetStaticProps } from "next";
import supabase from "@/utils/supabaseClient";
import { IProduct } from "@/utils/interfaces";
import {
  InTheBox,
  Features,
  Splash,
  Gallery,
  Others,
} from "@/components/Products";
import Catagories from "@/components/lib/Catagories";

export default function Product({ data }: { data: IProduct[] }) {
  const product = data[0];
  const isNew = product.new;

  const {
    name,
    image,
    categoryImage,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = product;

  return (
    <div className="mt-28 lg:mt-44">
      <div className="wrapper grid gap-24 lg:gap-44">
        <Splash
          image={image}
          isNew={isNew}
          name={name}
          description={description}
          price={price}
        />

        <div className="grid gap-24 lg:flex">
          <Features features={features} />
          <InTheBox includes={includes} />
        </div>

        <Gallery gallery={gallery} />

        <Others others={others} />

        <Catagories />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .match({ slug: params?.slug });

  if (!data) {
    console.log(error);
  }

  return {
    props: { data },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "yx1-earphones" } },
      { params: { slug: "xx59-headphones" } },
      { params: { slug: "xx99-mark-one-headphones" } },
      { params: { slug: "xx99-mark-two-headphones" } },
      { params: { slug: "zx7-speaker" } },
      { params: { slug: "zx9-speaker" } },
    ],
    fallback: false,
  };
}
