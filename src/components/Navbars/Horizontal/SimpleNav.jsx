import { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import atom from "../../../assets/images/atom.svg";
import NavBtn from "../../Buttons/NavBtn";

const SimpleNav = () => {
  let Links = [
    {name: "Home", link:"/"},
    {name: "Service", link:"/"},
    {name: "Blog", link:"/"},
    {name: "About", link:"/"},
    {name: "Contact", link:"/"},
  ]
  let [open, setOpen] = useState(false)
  return (
    <nav className="shadow-md relative w-full bg-[#15a0af]">
      <div className="md:flex justify-between py-4 md:px-10 px-4">
        <div className="flex items-center font-bold text-2xl cursor-pointer">
          <div className="h-12 w-12 mr-2">
            <img src={atom} alt="Atom Logo" />
          </div>
          <h1>AppSolo</h1>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <FaRegWindowClose/>  : <FaBars/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-4 md:static absolute bg-[#15a0af] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-300 ease-in ${open ? 'top-20 opacity-100':'top-[-500px] opacity-0'} md:opacity-100`}>
          {
            Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-6">
                <a href={link.link} className="hover:text-gray-800 duration-200 font-semibold">{link.name}</a>
              </li>
            ))
          }
          <NavBtn>Get Started</NavBtn>
        </ul>
      </div>
    </nav>
  );
};

export default SimpleNav;
