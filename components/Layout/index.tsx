import Header from "./Header";
import Footer from "./Footer";

import { Children } from "@/utils/interfaces";

const Layout = ({ children }: Children) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
