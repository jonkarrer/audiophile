import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function Header() {
  const router = useRouter();
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    //Set header to solid background for product pages
    if (router.pathname === "/products/[id]") {
      return setAlpha(1);
    }
    window.onscroll = () => setAlpha(window.scrollY / window.innerHeight);
  }, [router]);

  return (
    <Fragment>
      <Mobile alpha={alpha} />
      <Desktop alpha={alpha} />
    </Fragment>
  );
}
