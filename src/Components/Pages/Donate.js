import React, { useState } from "react";

// import { Link } from "react-router-dom";
import Logo from "../../images/stacked/text-only.png";
import "./pages.css"

const Donate = () => {
  const [amount, setAmount] = useState(0);
  console.log(setAmount(amount));


  // const donation = (e) => {
  //   setAmount(e.target.value);
  // };


  // console.log(amount);

  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage:
              "url(/images/program-events/OurPartnersBanner.jpg)",

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
        <div className="flex flex-col pt-10 pb-10 gap-6 md:grid-cols-2 lg:grid-cols-3 bg-gray-500 md:p-12">
          <button className="w-3/4 m-auto text-center p-5 h-32 bg-blue-500 text-gray-500"><h3 className="pb-2">$50</h3><p>To buy school uniforms for scholars that need them.</p></button>
          <button className="w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500"><h3 className="pb-2">$150</h3><p>To purchase school supplies for every scholar to prevent the need to share.</p></button>
          <button className="w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500"><h3 className="pb-2">$250</h3><p>For personal protective equipment and cleaning supplies to keep everyone in the buibuttonafe.</p></button>
          <button className="w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500"><h3 className="pb-2">$500</h3><p>To purchase Chromebooks so that each scholar has a digital device to prevent educatbuttonaps while learning at home</p></button>
          <button className="w-3/4 m-auto text-center p-5 h-36 bg-blue-500 text-gray-500"><h3 className="pb-2">$1000</h3><p>For a Mi-Fi hotspot for a scholar to connect to hybrid classroom instruction.</p></button>
        </div>
        <div className="text-center p-5">
          <label className="pb-2">Enter Custom Amount</label>
          <input className="text-center shadow-inner p-5  " placeholder="$0.00"/>
          <button className="bg-blue-500 text-gray-500 p-5">Submit Custom Amount</button>
        </div>
    </>
  );
};
export default Donate;
