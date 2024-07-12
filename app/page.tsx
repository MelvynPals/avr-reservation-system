import React from 'react'
import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import ButtonHero from "./components/buttons/hero";
import Card from './components/card';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overscroll-y-auto">
      <section className={`${styles.hero} flex bg-[url('../public/heroCover.jpg')] bg-cover bg-center w-full h-screen items-center px-[20px] sm:max-2xl:px-[6.25%] 2xl:px-[12.5%]`}>
        <div className="flex grow flex-col gap-36 sm:gap-20">
          <div className="flex flex-col justify-center items-center gap-8 self-stretch">
            <h1 className="text-5xl font-bold text-whiteTC text-center sm:text-6xl md:text-7xl lg:max-w-[900px]">Audio Visual Room Reservation</h1>
            <h3 className="text-xl font-medium text-whiteTC text-center sm:text-3xl md:text-4xl">Your Vision, Our Room: <br /> Reserve Today</h3>
          </div>
          <ButtonHero />
        </div>
      </section>
      <section className='relative flex justify-center items-center w-full py-8 px-[20px] overflow-hidden lg:py-16 sm:max-2xl:px-[6.25%] 2xl:px-[12.5%]' id='about'>
        <Image className='absolute right-[-221.981px] top-[-193px] hidden sm:inline' src="/Blob-1.svg" alt="blob" width={376.981} height={386.785} />
        <div className='flex flex-col justify-center items-center w-full gap-8 lg:gap-16'>
          <h3 className='text-accentSecondary text-[26px] font-bold text-center lg:text-4xl'>About Audio Visual Room</h3>
          <div className='flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between'>
            <div className='max-w-lg lg:basis-1/2 xl:max-w-[600px]'>
              <Image className='min-w-72 grow' src="/avrCollagePhoto.png" alt="Avr Photo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='flex flex-col py-4 lg:basis-1/2 lg:pr-8'>
              <div className='flex flex-col gap-4 py-2'>
                <h4 className='text-mainText text-[22px] font-bold lg:text-[28px]'>Welcome to AVR Reservations</h4>
                <p className='text-secondaryText text-sm leading-[22px] lg:text-base lg:leading-6'>Simplify your booking experience with AVR Reservations. Our user-friendly platform streamlines the process of making and managing reservations for a wide range of services. Whether you&apos;re planning a class, scheduling an event, or booking a venue, AVR Reservations has you covered. Save time, avoid hassle, and enjoy peace of mind with our efficient and reliable reservation system.</p>
              </div>
              <div className='flex flex-col gap-4 py-2'>
                <h4 className='text-mainText text-[22px] font-bold lg:text-[28px]'>Usage Guidelines & Information</h4>
                <p className='text-secondaryText text-sm leading-[22px] lg:text-base lg:leading-6'>The AVR can accommodate up to 80-100 people comfortably, making it ideal for lectures, seminars, and small conferences. The room is available for use Monday through Friday, from 8:00 a.m. to 5:00 p.m. To ensure a smooth experience for all users, please adhere to the capacity limit and operating hours. We encourage you to book in advance to secure your preferred time slot. For booking information and a complete list of usage guidelines, please continue reading or contact our facilities management team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative flex justify-center items-center w-full py-8 bg-secondaryBG overflow-hidden lg:py-16 2xl:px-[12.5%]'>
        <Image className='absolute right-[-200px] bottom-[-200px] lg:left-[-200px] lg:top-[-200px]' src="/Blob-2.svg" alt="alt" width={373.735} height={337.433} />
        <div className='flex flex-col justify-center items-center w-full gap-2 lg:gap-8 z-[3]'>
          <h3 className='text-accentSecondary text-[26px] font-bold text-center lg:text-4xl'>What&apos;s New?</h3>
          <div className={`${styles.cardContainer} flex justify-start gap-4 items-center w-full overflow-x-scroll px-[20px] max-w-[1350px] min-[940px]:justify-between`}>
            <Card src='/new design.svg'
              header='New Design'
              body='Step into a world of visual appeal with our freshly re-imagined interface. Our sleek, modern design not only catches the eye but also enhances your overall booking experience. Navigate through a visually stunning platform that makes reservation management a pleasure.' />
            <Card src='/interface.svg'
              header='Enhanced Interface'
              body='Experience the perfect blend of form and function. Our enhanced interface boasts intuitive navigation, smart features, and thoughtful details that anticipate your needs. Enjoy a seamless journey from browsing available options to confirming your reservation, all within a few clicks.' />
            <Card src='/easy to use.svg'
              header='Easy To Use'
              body='Simplicity is at the heart of AVR Reservations. We&apos;re have streamlined every step of the reservation process, making it incredibly straightforward for users of all tech levels. Our user-friendly system guides you effortlessly from start to finish, ensuring a smooth and stress-free booking experience every time.' />
          </div>
        </div>
      </section>
    </main>
  );
}
