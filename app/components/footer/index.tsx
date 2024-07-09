import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-footerColor py-8 px-6 xl:px-[6.25%]'>
      <div className='flex flex-col justify-between gap-16 items-center md:flex-row md:gap-0'>
        <Image src="/logo-white.svg" alt="logo-white" width={250} height={92.608} />
        <div className='flex flex-col gap-4 text-whiteTC text-[11px] text-center'>
            <a>############</a>
            <div className='flex flex-col gap-2'>
                <a href='https://www.bing.com/ck/a?!&&p=5c6ddf727514d71eJmltdHM9MTcxOTc5MjAwMCZpZ3VpZD0wMGM2Mjk5Yy1hZGU3LTZhNTktMmJmMy0zZDBlYWNlNjZiYjImaW5zaWQ9NTg3NA&ptn=3&ver=2&hsh=3&fclid=00c6299c-ade7-6a59-2bf3-3d0eace66bb2&u=a1L21hcHM_Jm1lcGk9MTIzfn5Vbmtub3dufkFkZHJlc3NfTGluayZ0eT0xOCZxPVVTZVAlMjAtJTIwQ29tcHV0ZXIlMjBTY2llbmNlJTIwU29jaWV0eSZzcz15cGlkLllOODE0NHgxMzU4MTA1NjIyMjYzMDExNDExJnBwb2lzPTcuMDg2MDU0ODAxOTQwOTE4XzEyNS42MTcyMTAzODgxODM2X1VTZVAlMjAtJTIwQ29tcHV0ZXIlMjBTY2llbmNlJTIwU29jaWV0eV9ZTjgxNDR4MTM1ODEwNTYyMjI2MzAxMTQxMX4mY3A9Ny4wODYwNTV-MTI1LjYxNzIxJnY9MiZzVj0xJkZPUk09TVBTUlBM&ntb=1'>Iñigo Street, Barrio Obrero, Davao City</a>
                <p>Davao del Sur, 8000, Region XI</p>
            </div>
        </div>
        <div className='flex gap-8'>
            <Image src="/logo-usep.png" alt="Logo of USeP" width={70} height={70} />
            <Image src="/logo-cic.png" alt="Logo of CiC" width={70} height={70} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
