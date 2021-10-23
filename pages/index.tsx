import type { NextPage } from "next";
import { Splash, Menu, Gallery, Hero } from "@/components/Home";

const Home: NextPage = () => {
  return (
    <main>
      <Splash />
      <Menu />
      <Gallery />
      <Hero />
    </main>
  );
};

export default Home;
