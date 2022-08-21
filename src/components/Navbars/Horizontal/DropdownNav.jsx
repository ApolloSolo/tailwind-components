import { useState } from "react";
import {
  FaBars,
  FaRegWindowClose,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import atom from "../../../assets/images/atom.svg";
import InnerDropdown from "../components/InnerDropdown";

const DropdownNav = () => {
    // Define links for Service dropdown menu
  let Links = [
    { name: "Data Analysis", link: "/" },
    { name: "Consulting", link: "/" },
    { name: "Web Application", link: "/" },
    { name: "Web Design", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  let [dropdown, setDropdown] = useState(false);
  return (
    <nav className="shadow-md relative w-full bg-[#15a0af] mt-4">
      <div className="md:flex justify-between py-4 md:px-10 px-4">
        <div className="flex items-center font-bold text-2xl cursor-pointer">
          <div className="h-8 w-8 mr-1">
            <img src={atom} alt="Atom Logo" />
          </div>
          <h1>AppSolo</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <FaRegWindowClose /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 md:static absolute bg-[#15a0af] md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-300 ease-in ${
            open ? "top-[60px] opacity-100" : "top-[-500px] opacity-0"
          } md:opacity-100`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              Home
            </a>
          </li>
          <div className="relative" onClick={() => setDropdown(!dropdown)}>
            <div className="flex items-center cursor-pointer">
              <li className="md:ml-8 text-xl md:my-0 mr-1 hover:text-gray-700 duration-200 font-semibold">
                Service
              </li>
              {
                dropdown ? (<FaChevronUp/>) : (<FaChevronDown />)
              }
            </div>
            {dropdown ? (
              <InnerDropdown list={Links}/>
            ) : (
              false
            )}
          </div>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              About
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DropdownNav;
