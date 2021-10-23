import type { NextPage } from "next";
import { Splash, Menu, Gallery } from "@/components/Home";

const Home: NextPage = () => {
  return (
    <main className="mt-0">
      <Splash />
      <Menu />
      <Gallery />
    </main>
  );
};

export default Home;
