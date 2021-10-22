import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { Children } from "@/utils/interfaces";

const Layout = ({ children }: Children) => (
  <div>
    <Head>
      <title>audiophile</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="./public/favicon-32x32.png" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
