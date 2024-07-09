'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <>
      <div className='flex' onClick={handleClick}>
        <Image src={isActive ? '/Hamburger_MD_active.svg' : '/Hamburger_MD.svg'} alt="alt" width={24} height={24} className='flex-none' />
      </div>
    </>
  )
}

export default Hamburger
