import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { Children } from "@/utils/interfaces";

const Layout = ({ children }: Children) => (
  <div>
    <Head>
      <title>audiophile</title>
      <meta name="e-commerce" content="front-end mentor challenge" />
    </Head>

    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
