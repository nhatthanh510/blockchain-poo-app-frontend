import React from 'react'
import hot from '@/assets/images/hot.png'

export default function HotPair() {
  return (
    <div className='flex mt-8 border-t border-b border-gray-700 items-center'>
      <div className='md:w-1/4 grow-0 shrink-0 hidden md:block'>
        <span className='rounded-tl-md rounded-bl-md bg-gradient inline-block relative p-3 text-sm uppercase font-medium overflow-hidden pr-8 align-top'>
          <img
            src={hot}
            alt='Hot Pair'
            className='-mt-1 align-top inline-block mr-2'
          />
          Hot pair
          <span className='w-12 h-12 rounded-full bg-black absolute -top-0.5 right-0 -mr-[32px]' />
        </span>
      </div>
      <ul className='grid grid-cols-3 md:flex gap-2 md:gap-8 whitespace-nowrap md:w-3/4 grow-0 shrink-0 overflow-auto'>
        <li>
          <span className='text-sm uppercase text-[#00b6eb]'>#1 THE</span>
          <span className='text-xs text-green-500 ml-2'>+5,2%</span>
        </li>
        <li>
          <span className='text-sm uppercase text-[#00b6eb]'>#1 THE</span>
          <span className='text-xs text-green-500 ml-2'>+5,2%</span>
        </li>
        <li>
          <span className='text-sm uppercase text-[#00b6eb]'>#1 THE</span>
          <span className='text-xs text-green-500 ml-2'>+5,2%</span>
        </li>
        <li>
          <span className='text-sm uppercase text-[#00b6eb]'>#1 THE</span>
          <span className='text-xs text-green-500 ml-2'>+5,2%</span>
        </li>
      </ul>
    </div>
  )
}
