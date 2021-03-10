import React, { useState } from "react";

// import { Link } from "react-router-dom";
import Logo from "../../images/stacked/text-only.png";
import BannerImage from "../../images/landing/Donate-Banner.JPG";

const Donate = () => {
  const [amount, setAmount] = useState(0);

  // const donation = (e) => {
  //   setAmount(e.target.value);
  // };

  console.log(amount);

  return (
    <div className="h-screen w-full">
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
        className="w-full h-full relative bg-fixed bg-cover bg-center bg-no-repeat"
      >
        <span
          className="w-full h-full absolute opacity-50 bg-black bg-cover"
          id="overlay"
        />
        {/* Banner contents  */}
        <div className="flex flex-col space-y-12">
          <div className="sticky flex flex-none p-10 self-center h-36 w-auto  sm:h-1/4 sm:w-1/4 sm:self-start md:h-1/6 md:w-1/6 md:pl-10 bg-opacity-0">
            <img
              src={Logo}
              alt="Con mi madre logo"
              className="z-10 w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5 text-lg">
          <button
            onClick={() => setAmount(25)}
            className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto"
          >
            $25
          </button>
          <button className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            $50
          </button>
          <button className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            $100
          </button>
          <button className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            $250
          </button>
          <button className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            $500
          </button>
          <button className="h-16 w-1/3 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            $1000
          </button>
          <button className="h-16 w-1/2 rounded z-10 bg-blue-500 text-gray-500 m-auto">
            Other Amount
          </button>
        </div>
      </div>
    </div>
  );
};
export default Donate;
