import type { NextPage } from "next";

import ArrowBtn from "@/components/lib/ArrowBtn";

const Home: NextPage = () => {
  return (
    <main className="bg-101010">
      <h1>Audiofile app</h1>
      <button className="btn-gold">See Products</button>
      <button className="btn-white">See Products</button>
      <ArrowBtn action="Shop" link="/" />
    </main>
  );
};

export default Home;
