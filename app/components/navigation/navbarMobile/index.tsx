'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navlinks from './Navlinks';


const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <>
      <nav className='fixed top-0 left-0 flex flex-row bg-mainBG p-2 justify-between items-center w-full h-[60px] shadow-softShadow overflow-visible z-50'>
        <div className='flex' onClick={handleClick}>
          <Image src={isActive ? '/Hamburger_MD_active.svg' : '/Hamburger_MD.svg'} alt="alt" width={24} height={24} className='flex-none' />
        </div>
        <Image src="/logo_colored.svg" alt="alt" width={107} height={42} className='flex-none' />
        <Link href="/">
          <Image src="/Mail.svg" alt="alt" width={24} height={24} />
        </Link>
      </nav>
      <div className={`${isActive ? 'left-0' : 'left-[-100%]'} fixed top-[60px] h-[calc(100vh-60px)] left-0 bg-mainBG opacity-100 flex flex-col z-9 w-full justify-start items-center transition-all duration-300 ease-in-out text-lg z-50`}>
        <Navlinks onClick={handleClick}/>
      </div>
    </>
  )
}

export default NavbarMobile
