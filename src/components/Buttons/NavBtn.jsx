import React from 'react'

const NavBtn = (props) => {
  return (
    <button className='bg-[#25bbdd] text-white py-2 px-6 rounded md:ml-8 hover:bg-[#1f859c] duration-200'>{props.children}</button>
  )
}

export default NavBtn