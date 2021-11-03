import Link from "next/link";
import Hero from "../lib/Hero";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/checkout" ? null : <Hero />}

      <footer className="bg-101010 mt-16 md:mt-28">
        <div className="wrapper grid gap-12 py-12 md:grid-cols-2 relative">
          <div
            className="bg-D87D4A h-1 m-auto absolute top-0 left-0 right-0 md:m-0"
            style={{ width: "101px" }}
          ></div>
          <img
            className="m-auto md:m-0 md:col-span-2 lg:col-span-1"
            src="/shared/desktop/logo.svg"
            alt="logo"
          />
          <nav className="grid gap-7 m-auto text-center text-white md:m-0 md:flex md:gap-0 md:space-x-7 md:col-span-2 lg:col-span-1 lg:justify-end">
            <Link passHref href="/">
              <span className="subtitle cursor-pointer hover:text-D87D4A">
                Home
              </span>
            </Link>
            <Link passHref href="/headphones">
              <span className="subtitle cursor-pointer hover:text-D87D4A">
                Headphones
              </span>
            </Link>
            <Link passHref href="/speakers">
              <span className="subtitle cursor-pointer hover:text-D87D4A">
                Speakers
              </span>
            </Link>
            <Link passHref href="/earphones">
              <span className="subtitle cursor-pointer hover:text-D87D4A">
                Earphones
              </span>
            </Link>
          </nav>
          <p className="light text-center md:text-left md:col-span-2 lg:col-span-1">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="light text-center md:text-left lg:row-start-3">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex m-auto space-x-4 md:justify-self-end md:m-0 lg:self-end">
            <img
              className="w-6 h-6 cursor-pointer"
              src="/shared/desktop/icon-facebook.svg"
              alt="facebook icon"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src="/shared/desktop/icon-twitter.svg"
              alt="facebook icon"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src="/shared/desktop/icon-instagram.svg"
              alt="facebook icon"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
