import { GetStaticProps } from "next";
import supabase from "@/utils/supabaseClient";
import { IProduct } from "@/utils/interfaces";
import {
  CategoryImage,
  Price,
  InTheBox,
  Features,
  Splash,
} from "@/components/Products";

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

  console.log(includes);
  return (
    <div className="mt-28">
      <div className="wrapper">
        <p className="opacity-50">Go Back</p>

        <Splash
          categoryImage={categoryImage}
          isNew={isNew}
          name={name}
          description={description}
        />

        <Price price={price} />

        <Features features={features} />

        <InTheBox includes={includes} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .match({ id: params?.id });

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
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
    ],
    fallback: false,
  };
}
