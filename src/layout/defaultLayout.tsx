import React from "react";
import { Footer } from "../common/components/footer/footer";
import { NavBar } from "../common/components/navbar/navBar";

const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <div className="relative flex flex-col flex-grow min-h-screen overflow-scroll bg-gray-50">
    <NavBar />
    <>{children}</>
    <Footer/>
  </div>
);
export default DefaultLayout;
