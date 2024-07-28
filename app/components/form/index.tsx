'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Input from './input';
import InputTime from './inputTime';
import Select from './select';
import InputNum from './inputNum';
import styles from './index.module.css'

export function getCurrentDate(separator = '/') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
}

const Form = () => {
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
    { value: 'Option 6', label: 'Option 6' }
  ]

  const departmentNames = [
    { value: 'new options 1', label: 'new options 1' },
    { value: 'new options 2', label: 'new options 2' },
    { value: 'new options 3', label: 'new options 3' },
    { value: 'new options 4', label: 'new options 4' },
    { value: 'new options 5', label: 'new options 5' },
    { value: 'new options 6', label: 'new options 6' }
  ]

  return (
    <>
      <div className='flex flex-col border-solid border-accentSecondary border-[3px] rounded-3xl w-full max-w-lg px-[14.5px] py-6'>
        <form action='' className='flex flex-col justify-center items-center gap-8'>
          <h4 id='currentDate' className='text-[22px] font-semibold text-mainText sm:text-[24px] lg:text-[28px]'>{getCurrentDate()}</h4>
          <div className='flex flex-col justify-start items-start w-full gap-3'>
            <h5 className='text-lg font-semibold text-accentSecondary sm:text-xl lg:text-2xl'>Event Details</h5>
            <Input htmlFor='event_name' label='Event Name:' type='text' placeholder='Ex: CSS Week' />
            <Input htmlFor='event_date' label='Event Date:' type='date' />
            <InputNum htmlFor='participants_num' label='No. of Participants:' type='number' placeholder='80' min={0} max={100} />
            <InputTime htmlFor='eventStartTime' label='Event Start Time:' />
            <InputTime htmlFor='eventEndTime' label='Event End Time:' />
            <Select htmlFor='puroseRequest' label='Purpose of Request:' data={options} optionDefault=' - - Purpose of Request - -' />
          </div>
          <div className='flex flex-col justify-start items-start w-full gap-3'>
            <h5 className='text-lg font-semibold text-accentSecondary sm:text-xl lg:text-2xl'>Personal Information</h5>
            <Select htmlFor='puroseRequest' label='Purpose of Request:' data={departmentNames} optionDefault='- - Colleges of USeP - -' />
            <Input htmlFor='requested_by' label='Requested By:' type='text' placeholder='Juan Dela Cruz' />
            <Input htmlFor='email' label='Email Address:' type='email' placeholder='user@.usep.ph' />
          </div>
          <div className='flex flex-col justify-start items-start w-full gap-3'>
            <h5 className='text-lg font-semibold text-accentSecondary sm:text-xl lg:text-2xl'>Additional Information</h5>
            <div className='text-sm text-mainText sm:text-base'>
              <p className='mb-2'>Please state the equipment that will be used in the AVR that is not mentioned below: </p>
              <ul className='list-disc list-inside'>
                <li>Microphone</li>
                <li>LED Wall TV</li>
                <li>Speakers</li>
              </ul>
            </div>
            <textarea className={`${styles.textarea} text-sm px-2 pt-2 items-center w-full border-b-[3px] h-9 text-nowrap overflow-x-auto border-b-accentSecondary focus:outline-none sm:text-base`}
              name="add_info"
              id="add_info"
              placeholder='Indicate here if applicable'></textarea>
          </div>
          <button className='text-lg font-bold text-whiteTC bg-accentPrimary rounded-2xl w-full px-4 py-2 sm:text-xl hover:bg-accentPrimaryHover focus:bg-accentPrimaryFocus'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
