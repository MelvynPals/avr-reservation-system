'use client'

import React from 'react'
import { usePathname } from 'next/navigation';

interface InputTimeProps {
  htmlFor: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
}

const previewLink = '/preview'

export const InputTime: React.FC<InputTimeProps> = ({
  htmlFor = '',
  label = '',
  placeholder = '',
  required = true,
  readOnly = false
}) => {
  const currentLink = usePathname();
  readOnly = currentLink === previewLink;

  return (
    <div className='flex flex-col justify-center items-start gap-2 w-full'>
      <label className='text-base text-mainText font-bold sm:text-lg'
        htmlFor={htmlFor}>
        {label}
      </label>
      <input className='text-sm justify-center items-start border-solid border-accentSecondary border-[3px] rounded-[10px] w-full py-2 px-4 bg-mainBG focus:outline-none focus:ring-1 focus:ring-accentSecondaryFocus sm:text-base'
        type='time'
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        min="08:00"
        max="17:00" />
    </div>
  )
}

export default InputTime