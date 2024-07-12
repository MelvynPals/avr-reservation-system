'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

interface Selectrops {
  htmlFor: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}
const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' }
]

const previewLink = '/preview'

export const Select: React.FC<Selectrops> = ({
  htmlFor = '',
  label = '',
  required = true,
  disabled
}) => {
  const currentLink = usePathname();
  disabled = currentLink === previewLink;

  return (
    <div className='flex flex-col justify-center items-start gap-2 w-full'>
      <label className='text-base text-mainText font-bold sm:text-lg'
        htmlFor={htmlFor}>
        {label}
      </label>
      <select className="text-sm justify-center items-start border-solid border-accentSecondary border-[3px] rounded-[10px] w-full py-2 px-4 bg-mainBG focus:outline-none focus:ring-1 focus:ring-accentSecondaryFocus sm:text-base"
        name={htmlFor}
        id={htmlFor}
        required={required}
        disabled={disabled}>
        <option value='' selected disabled className='bg-mainBG'>- - Purpose of Request - -</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className='bg-mainBG'>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
