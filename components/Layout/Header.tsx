import { useState, useEffect, Fragment } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function Header() {
  const [alpha, setAlpha] = useState(0);
  useEffect(() => {
    window.onscroll = () => setAlpha(window.scrollY / window.innerHeight);
  }, []);

  return (
    <Fragment>
      <Mobile alpha={alpha} />
      <Desktop alpha={alpha} />
    </Fragment>
  );
}
