import React from "react";

import Nav from "./Navigation/Nav";
import CMMLogo from "../images/horizontal/color-and-white.png";

const Header = () => {
  return (
    <div className="flex h-150 w-full">
      <div className="h-full bg-opacity-0 md:w-1/4 flex flex-none">
        <img src={CMMLogo} alt="Con mi madre logo" className="z-10" />
      </div>
      <div className="flex w-3/4 items-center justify-end pr-8">
        <Nav />
      </div>
    </div>
  );
};
export default Header;
