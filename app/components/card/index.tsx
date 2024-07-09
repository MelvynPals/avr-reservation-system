import React from 'react'
import Image from 'next/image'

const Card = ({ src = '', header = '', body = '' }) => {
  return (
    <div className='flex py-4 px-2 shrink-0 h-[450px] lg:h-[470px]'>
      <div className='flex flex-col grow items-strech gap-4 basis-1/3 py-8 px-4 max-w-[275px] bg-secondaryBG shadow-softShadow lg:shadow-transparent lg:hover:shadow-softShadow lg:max-w-[350px]'>
        <div className='w-auto h-auto max-h-[80px] lg:max-h-[100px]'>
          <Image className='max-h-[80px] lg:max-h-[100px]' src={src} alt="alt"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-mainText text-[22px] font-bold lg:text-[28px]'> {header} </h4>
          <p className='text-secondaryText text-sm leading-[22px] lg:text-base'> {body} </p>
        </div>
      </div>
    </div>
  )
}

export default Card
