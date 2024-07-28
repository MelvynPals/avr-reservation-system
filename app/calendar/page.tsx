import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Form from '../components/form'
import JotformEmbed from '../components/jotForms'

const Calendar = () => {
  return (
    <main className='flex flex-col items-center justify-between overscroll-y-auto'>
      <section className={`${styles.calendarBg} flex bg-[url('../public/calendarCover.jpg')] bg-cover bg-center w-full h-screen items-center px-[20px] sm:max-2xl:px-[6.25%] 2xl:px-[12.5%]`}>
        <div className='flex flex-col justify-center items-center w-full gap-8 lg:gap-16'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='text-[26px] text-whiteTC font-bold text-center lg:text-4xl sm:text-3xl md:text-4xl'>Reserve The AV Room</h3>
            <p className='text-whiteTC text-sm leading-[22px] lg:text-lg lg:leading-6 text-center'>Please select a date and time to check the availability of our audio-visual rooms. Book your slots in advance to ensure you have the space you need for your events, meetings, or presentations.</p>
          </div>
          <div className='w-64 h-96 bg-accentPrimary' id='box'></div>
        </div>
      </section>
      <section className='relative flex justify-center items-center w-full pt-8 pb-16 px-[20px] bg-mainBG lg:py-16 sm:max-2xl:px-[6.25%] 2xl:px-[12.5%]'>
        <Image className={`${styles.wave} absolute top-0 left-0 z-0`} src='/wave_calendar_top.svg' alt="wave" width={0} height={0} />
        <div className='flex flex-col justify-center items-center w-full gap-8 lg:gap-8 z-[3]'>
          <div className='flex flex-col justify-center items-center gap-2 lg:gap-8'>
            <h3 className='text-accentSecondary text-[26px] font-bold sm:text-4xl' id='Sub-Title'>Reservation Details</h3>
            <p className='text-secondaryText text-base text-center leading-[22px] max-w-3xl lg:text-lg lg:leading-6'>Please fill out the form below with the necessary information to complete your AV room reservation. Ensure all details are accurate to avoid any delays in processing your request.</p>
          </div>
          <Form />
          {/* <JotformEmbed /> */}
        </div>
        <Image className={`${styles.wave} absolute bottom-0 right-0 z-0`} src='/wave_calendar_bottom.svg' alt="wave" width={0} height={0} />
      </section>
    </main>
  )
}

export default Calendar
