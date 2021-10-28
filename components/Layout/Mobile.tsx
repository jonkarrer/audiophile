import { useState } from "react";
import Catagories from "../lib/Catagories";
import Cart from "../Cart";

const Mobile = ({ alpha }: { alpha: number }) => {
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
      <Cart />
      {/** Hidden Overlay when nav is open */}
      <div
        className={`fixed h-screen md:w-screen bg-black opacity-60 top-0 z-30 ${
          menu ? "hidden" : ""
        }`}
      ></div>

      <header
        className="bg-101010 border-b border-979797 md:border-0 w-screen z-50 fixed top-0"
        style={{ height: "90px", background: `rgba(16,16,16,${alpha})` }}
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
        className={`fixed h-screen overflow-y-scroll md:w-screen z-30 left-0 top-10 md:top-8 md:pb-0 md:overflow-y-auto bg-clear ${
          menu ? "transform -translate-x-full" : ""
        } `}
      >
        <div className="bg-white pt-10 pb-36 px-6 w-screen rounded-b-lg md:pt-0 md:pb-0 md:h-81 md:flex md:justify-center md:items-center">
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

export default Mobile;
