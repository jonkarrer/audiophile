import Link from "next/link";
import { useState } from "react";
import CartDropdown from "@/components/Cart/Dropdown";

const Desktop = ({ alpha }: { alpha: number }) => {
  const [cart, setCart] = useState(true);

  const openCart = () => {
    setCart(!cart);

    if (cart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <>
      <div
        className={`fixed h-screen w-screen bg-black opacity-60 top-0 z-30 ${
          cart === false ? "" : "hidden"
        }`}
      ></div>

      <div className={`${cart ? "hidden" : ""}`}>
        <CartDropdown />
      </div>
      <header
        className="hidden lg:flex fixed top-0 w-screen z-50 max-w-8xl left-0 right-0 m-auto"
        style={{ height: "98px", background: `rgba(16,16,16,${alpha})` }}
      >
        <div className="wrapper flex justify-between items-center h-full border-b border-979797 ">
          <Link passHref href="/">
            <img
              className="w-36 h-6 cursor-pointer"
              src="/shared/desktop/logo.svg"
              alt="logo"
            />
          </Link>
          <nav className="text-white grid grid-flow-col gap-9">
            <Link passHref href="/">
              <span className="subtitle cursor-pointer">Home</span>
            </Link>
            <Link passHref href="/headphones">
              <span className="subtitle cursor-pointer">Headphones</span>
            </Link>
            <Link passHref href="/speakers">
              <span className="subtitle cursor-pointer">Speakers</span>
            </Link>
            <Link passHref href="/earphones">
              <span className="subtitle cursor-pointer">Earphones</span>
            </Link>
          </nav>

          <img
            onClick={() => openCart()}
            className="h-5 w-6 cursor-pointer"
            src="/shared/desktop/icon-cart.svg"
            alt="cart icon"
          />
        </div>
      </header>
    </>
  );
};
export default Desktop;
