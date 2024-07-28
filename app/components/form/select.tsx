'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

interface Selectrops {
  htmlFor: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  data: { value: string, label: string }[];
  optionDefault: string;
}

const previewLink = '/preview'

export const Select: React.FC<Selectrops> = ({
  htmlFor = '',
  label = '',
  required = true,
  disabled,
  data = [],
  optionDefault
}) => {
  const currentLink = usePathname();
  disabled = currentLink === previewLink;

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
        <option value='' selected disabled className='bg-mainBG'>{optionDefault}</option>
        {data.map((data) => (
          <option key={data.value} value={data.value} className='bg-mainBG'>{data.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
