import React, { useState } from "react";
import Link from "next/link";
import Catagories from "../lib/Catagories";

export default function Header() {
  return (
    <React.Fragment>
      <Mobile />
      <Desktop />
    </React.Fragment>
  );
}

const Mobile = () => {
  const [menu, setMenu] = useState(true);

  const handleClick = () => {
    setMenu(!menu);

    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="lg:hidden">
      {/** Hidden Overlay when nav is open */}
      <div
        className={`h-screen md:w-screen bg-black opacity-60 absolute top-0 z-30 ${
          menu ? "hidden" : ""
        }`}
      ></div>

      <header
        className="bg-101010 border-b border-979797 md:border-0 w-screen z-50 fixed top-0"
        style={{ height: "90px" }}
      >
        <div className="wrapper flex justify-between items-center h-full md:border-b border-979797">
          <img
            onClick={() => handleClick()}
            src="/shared/tablet/icon-hamburger.svg"
            alt="hamburger icon"
            data-cy="hamburger"
          />
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

      {/** Navigation slide component */}
      <nav
        data-cy="nav-component"
        data-test-state={menu}
        className={`fixed h-screen overflow-y-scroll md:w-screen z-30 left-0 md:pb-0 md:overflow-y-auto bg-clear ${
          menu ? "transform -translate-x-full" : ""
        } `}
      >
        <div className="bg-white pt-20 pb-36 px-6 w-screen rounded-b-lg md:pt-0 md:pb-0 md:h-81 md:flex md:justify-center md:items-center">
          <Catagories />
        </div>
      </nav>
      <style jsx>{`
        nav {
          margin-top: 50px;
        }
        @media (min-width: 768px) {
          nav {
            margin-top: 58px;
          }
        }
      `}</style>
    </div>
  );
};

const Desktop = () => (
  <header
    className="hidden lg:flex bg-101010 fixed top-0 w-screen"
    style={{ height: "98px" }}
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
        <Link passHref href="/">
          <span className="subtitle cursor-pointer">Headphones</span>
        </Link>
        <Link passHref href="/">
          <span className="subtitle cursor-pointer">Speakers</span>
        </Link>
        <Link passHref href="/">
          <span className="subtitle cursor-pointer">Earphones</span>
        </Link>
      </nav>
      <Link passHref href="/">
        <img
          className="h-5 w-6 cursor-pointer"
          src="/shared/desktop/icon-cart.svg"
          alt="cart icon"
        />
      </Link>
    </div>
  </header>
);
