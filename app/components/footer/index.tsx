'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import FooterMain from './footer'

const Footer = () => {
  const pathname = usePathname();
  const isCalendar = pathname === '/calendar';
  return (
    <>
    {/* {isCalendar ? null : <FooterMain />} */}
    <FooterMain />
    </>
  )
}

export default Footer
