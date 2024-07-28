'use client'

import React from 'react'
import { usePathname } from 'next/navigation';

interface InputNumProps {
  htmlFor: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  min: number;
  max: number;
}

const previewLink = '/preview'

export const InputNum: React.FC<InputNumProps> = ({
  htmlFor = '',
  label = '',
  type = 'number',
  placeholder = '',
  required = true,
  readOnly,
  min,
  max
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
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        min={min}
        max={max} />
    </div>
  )
}

export default InputNum