'use client'
import React, { useState, useEffect } from 'react'
import NavbarMobile from './navbarMobile'
import NavbarDesktop from './navbarDesktop'

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // Set the initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  )
}

export default Navigation
