import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import EmailSidebar from "./Sidebars/EmailSidebar";
import SocialSidebar from "./Sidebars/SocialSidebar";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="bg-steel-100 dark:bg-steel-800 dark:text-steel-100 text-steel-800">
    <Navbar />
    <div className="lg:block hidden">
      <SocialSidebar />
      <EmailSidebar />
    </div>
    <div className="pt-32 lg:px-24 px-8">{children}</div>
    <Footer />
  </div>
);

export default Layout;
