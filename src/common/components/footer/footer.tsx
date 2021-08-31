import React from "react";
import logo from "../../../img/logo-white.png";
export const Footer: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full px-4 mx-auto text-white bg-indigo-600 sm:flex-row h-28 sm:px-4 lg:px-8">
      <div className="flex-1 mt-3 space-y-2 sm:mt-0">
        <img src={logo} alt="Book flight logo" className="w-36 sm:w-44" />
        <p className="text-xs font-medium md:text-base md:">
          We make booking easy
        </p>
      </div>
      <div className="flex flex-1 space-x-4" aria-label="footer-menus">
        <button
          type="button"
          className="text-indigo-130 hover:text-white px-3 py-2 font-medium text-sm rounded-md"
          aria-current="page"
        >
          About Us
        </button>
        <button
          type="button"
          className="bg-indigo-700 text-gray-50 font-medium px-3 py-2 font-medium text-sm rounded-md"
          aria-current="page"
        >
          Services
        </button>
        <button
          type="button"
          className="text-indigo-100 hover:text-white"
          aria-current="page"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};
