import React from "react";

const InnerDropdown = ({ list }) => {
  return (
    <ul className="absolute md:right-[-30px] top-8 w-[150px] bg-[#048e9d] rounded-md py-2">
      {
            list.map((link) => (
              <li key={link.name} className="ml-2 text-lg my-2">
                <a href={link.link} className="hover:text-gray-700 duration-200 font-semibold">{link.name}</a>
              </li>
            ))
          }
    </ul>
  );
};

export default InnerDropdown;
