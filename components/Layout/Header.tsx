import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function Header() {
  const router = useRouter();
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    //Set header to solid black background
    if (
      router.pathname === "/products/[slug]" ||
      router.pathname === "/checkout"
    ) {
      window.onscroll = () => null;
      return setAlpha(1);
    } else {
      window.onscroll = () => setAlpha(window.scrollY / window.innerHeight);
    }
  }, [router]);

  return (
    <Fragment>
      <Mobile alpha={alpha} />
      <Desktop alpha={alpha} />
    </Fragment>
  );
}
