import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ButtonHero = () => {
  return (
    <>
    <div className='flex grow flex-col justify-center items-center gap-4 sm:flex-row'>
      <button type='button' className='bg-accentPrimary flex flex-row justify-center items-center gap-3 rounded-2xl px-4 py-2 hover:bg-accentPrimaryHover focus:bg-accentPrimaryFocus w-full max-w-96 sm:max-2xl:basis-1/2 sm:max-2xl:max-w-72 transition-all duration-300 ease-in-out'>
        <span className='text-whiteTC text-base sm:text-lg'>
          Reserve Now
        </span>
        <Image src="/Arrow_Right_MD.svg" alt="arrow-right" width={24} height={24} />
      </button>
      <Link href="#about" className='bg-transparent border-2 border-accentPrimary flex flex-row justify-center items-center gap-3 rounded-2xl px-4 py-2 hover:bg-accentPrimary focus:bg-accentPrimaryFocus focus:border-accentPrimaryFocus w-full max-w-96 sm:max-2xl:basis-1/2 sm:max-2xl:max-w-72 transition-all duration-300 ease-in-out'>
        <span className='text-whiteTC text-base sm:text-lg'>
          Learn More
        </span>
      </Link>
    </div>
    </>
  )
}

export default ButtonHero