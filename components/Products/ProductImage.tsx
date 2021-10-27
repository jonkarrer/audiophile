import { useEffect, useState } from "react";
import { IImage } from "@/utils/interfaces";

const ProductImage = ({ image }: { image: IImage }) => {
  const { mobile, tablet, desktop } = image;

  const base = desktop.split("/").slice(2).join("/");
  const md = tablet.split("/").slice(2).join("/");

  const [screen, setScreen] = useState("");
  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreen(md);
      } else {
        setScreen(base);
      }
    };
    checkWindowWidth();
    window.onresize = () => checkWindowWidth();
  }, [base, md]);

  return (
    <img
      className="md:col-start-1"
      src={`/${screen}`}
      alt="category image of product"
    />
  );
};

export default ProductImage;
