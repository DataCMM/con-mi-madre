import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popper from "popper.js";
import { FiMenu } from "react-icons/fi";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blue-500")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-2">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <FiMenu />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-gray-300 " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link
                to="/Purpose"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Our Purpose
              </Link>
              <Link
                to="/Program"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Program
              </Link>
              <Link
                to="/Services"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Services
              </Link>
              <Link
                to="/Involved"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Get Involved
              </Link>
              <Link
                to="/Events"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Events
              </Link>
              <Link
                to="/Awards"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Awards
              </Link>
              <Link
                to="/Partners"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Our Partners
              </Link>
              <Link
                to="/Careers"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                // onClick={(e) => e.preventDefault()}
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
