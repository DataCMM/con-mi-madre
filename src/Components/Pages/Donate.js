// import React, { useState } from "react";

import React from "react";

// import { Link } from "react-router-dom";
import Logo from "../../images/stacked/text-only.png";
import "./pages.css";

const Donate = () => {
  // const [amount, setAmount] = useState(0);
  // console.log(setAmount(amount));

  // const donation = (e) => {
  //   setAmount(e.target.value);
  // };

  // console.log(amount);

  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/donate-banner.jpg)",
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 pr-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
              <div id="title1">Donate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-12 gap-6 m-auto md:grid-cols-2 lg:grid-cols-3 bg-gray-500 text-center">
        <div className="p-2">
          <button className="rounded w-3/4 m-auto text-center p-5 h-32 bg-blue-500 text-gray-500">
            <h3 className="pb-2 text-2xl font-semibold">$50</h3>
            <p className="text-lg font-light">
              To buy school uniforms for scholars that need them.
            </p>
          </button>
        </div>
        <div className="p-2">
          <button className="rounded w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500">
            <h3 className="pb-2 text-2xl font-semibold">$150</h3>
            <p className="text-lg font-light">
              To purchase school supplies for every scholar to prevent the need
              to share.
            </p>
          </button>
        </div>
        <div className="p-2">
          <button className="rounded w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500">
            <h3 className="pb-2 text-2xl font-semibold">$250</h3>
            <p className="text-lg font-light">
              For personal protective equipment and cleaning supplies to keep
              everyone in the building safe.
            </p>
          </button>
        </div>
        <div className="p-2">
          <button className="rounded w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500">
            <h3 className="pb-2 text-2xl font-semibold">$500</h3>
            <p className="text-lg font-light">
              To purchase Chromebooks so that each scholar has a digital device
              to prevent educational gaps while learning at home
            </p>
          </button>
        </div>
        <div className="p-2">
          <button className="rounded w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500">
            <h3 className="pb-2 text-2xl font-semibold">$1000</h3>
            <p className="text-lg font-light">
              For a Mi-Fi hotspot for a scholar to connect to hybrid classroom
              instruction.
            </p>
          </button>
        </div>
      </div>
      <div className="text-center m-auto bg-gray-500 p-6 pb-12">
        <label className="text-2xl font-semibold">Enter Custom Amount</label>
        <div className="flex flex-row justify-center">
          <div className="p-3">
            <input
              className="rounded text-center text-2xl font-semibold shadow-inner p-3"
              placeholder="$0.00"
            />
          </div>
          <div className="p-3">
            <button className="rounded bg-blue-500 text-gray-500 p-3">
              <h3 className="text-2xl font-light">Submit Custom Amount</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Donate;
