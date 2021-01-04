import React from "react";
import Popper from "popper.js";
import { FiMenu } from "react-icons/fi";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
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
              <a
                href="/Purpose"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Our Purpose
              </a>
              <a
                href="/Program"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Program
              </a>
              <a
                href="/Services"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Services
              </a>
              <a
                href="/Involved"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Get Involved
              </a>
              <a
                href="/Events"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Events
              </a>
              <a
                href="/Awards"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Awards
              </a>
              <a
                href="/Partners"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Our Partners
              </a>
              <a
                href="/Careers"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-pink-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Careers
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-100 opacity-25" />
              <a
                href="/Donate"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-green-400" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
