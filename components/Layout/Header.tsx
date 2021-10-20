import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <React.Fragment>
      <Mobile />
      <header className="hidden lg:flex bg-101010" style={{ height: "89px" }}>
        <div className="wrapper flex justify-between items-center h-full border-b border-979797 ">
          <img className="w-36 h-6" src="/shared/desktop/logo.svg" alt="logo" />
          <nav className="text-white grid grid-flow-col gap-9">
            <Link passHref href="/">
              <span className="subtitle">Home</span>
            </Link>
            <Link passHref href="/">
              <span className="subtitle">Headphones</span>
            </Link>
            <Link passHref href="/">
              <span className="subtitle">Speakers</span>
            </Link>
            <Link passHref href="/">
              <span className="subtitle">Earphones</span>
            </Link>
          </nav>
          <img
            className="h-5 w-6"
            src="/shared/desktop/icon-cart.svg"
            alt="cart icon"
          />
        </div>
      </header>
    </React.Fragment>
  );
}

const Mobile = () => {
  return (
    <header
      className="bg-101010 border-b border-979797 md:border-0 lg:hidden"
      style={{ height: "89px" }}
    >
      <div className="wrapper flex justify-between items-center h-full md:border-b border-979797">
        <img src="/shared/tablet/icon-hamburger.svg" alt="hamburger icon" />
        <div className="flex items-center md:flex-1 md:px-11">
          <img
            className="justify-self-start"
            src="/shared/desktop/logo.svg"
            alt="logo"
          />
        </div>
        <img src="/shared/desktop/icon-cart.svg" alt="cart icon" />
      </div>
    </header>
  );
};
