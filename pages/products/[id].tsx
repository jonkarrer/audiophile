import { GetStaticProps } from "next";
import supabase from "@/utils/supabaseClient";

export default function Product({ data }: any) {
  console.log("props", data[0]);
  return (
    <div>
      <h1>{data[0].name}</h1>
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
