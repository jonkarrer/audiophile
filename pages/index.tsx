import type { NextPage } from "next";
import { Splash, Menu, Gallery } from "@/components/Home";

const Home: NextPage = () => {
  return (
    <main>
      <Splash />
      <Menu />
      <Gallery />
    </main>
  );
};

export default Home;
