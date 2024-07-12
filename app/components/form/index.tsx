'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Input from './input';
import InputTime from './inputTime';
import Select from './select';

export function getCurrentDate(separator = '/') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
}
const Form = () => {
  return (
    <>
      <div className='flex flex-col border-solid border-accentSecondary border-[3px] rounded-3xl w-full max-w-lg px-[14.5px] py-6'>
        <form action='' className='flex flex-col justify-center items-center gap-4'>
          <h4 id='currentDate' className='text-[22px] font-semibold text-mainText sm:text-[24px] lg:text-[28px]'>{getCurrentDate()}</h4>
          <div className='flex flex-col justify-start items-start w-full gap-3'>
            <h5 className='text-lg font-semibold text-accentSecondary sm:text-xl lg:text-2xl'>Event Details</h5>
            <Input htmlFor='eventName' label='Event Name:' type='text' placeholder='Ex: CSS Week' />
            <Input htmlFor='eventDate' label='Event Date:' type='date' />
            <InputTime htmlFor='eventStartTime' label='Event Start Time:' />
            <InputTime htmlFor='eventEndTime' label='Event End Time:' />
            <Select htmlFor='puroseRequest' label='Purpose of Request:' />
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
