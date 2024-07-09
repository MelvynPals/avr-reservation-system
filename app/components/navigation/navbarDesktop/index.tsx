import React from 'react';
import Image from "next/image";
import NavLinks from './NavLinks';

const NavbarDesktop = () => {
  return (
    <nav className='fixed top-[16px] left-[50%] translate-x-[-50%] flex flex-row bg-[#FFFFFF]/90 py-1 px-4 justify-center items-center w-[calc(100%-12.5%)] max-h-12 rounded-[40px] backdrop-blur-sm shadow-softShadow z-50'>
      <div className='flex grow py-1 justify-between items-center self-stretch'>
        <div className='flex items-center gap-8 md:gap-20 lg:gap-40'>
          <Image src="logo-icon.svg" alt="logo-icon" width={40} height={40} />
          <div className='flex flex-row justify-center items-center gap-5 text-base md:gap-9'>
            <NavLinks />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <a href="#">
            <h6 className='text-mainText text-base font-bold hover:text-accentPrimaryHover'>avrcic@usep.edu.ph</h6>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDesktop
