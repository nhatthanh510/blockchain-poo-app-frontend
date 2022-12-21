import React from 'react'
import icon1 from '@/assets/images/icon-1.png'
import icon2 from '@/assets/images/icon-2.png'
import reload from '@/assets/images/reload.png'
import SearchBar from './SearchBar'

export default function MainTop() {
  return (
    <div className='md:flex justify-between'>
      <div className='token-list'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
          <div>
            <p className='uppercase font-bold'>Metaverse Token (MTT/BNB)</p>
            <p className='text-green-600 text-[15px]'>$0.000025152</p>
          </div>
          <div>
            <p className='uppercase font-bold'>Metaverse Token (MTT/BNB)</p>
            <p className='text-green-600 text-[15px]'>$0.000025152</p>
          </div>
        </div>
        <SearchBar />
      </div>
      <div className='flex flex-col justify-between mt-4 md:mt-0'>
        <ul className='flex gap-5 justify-center md:justify-start'>
          <li>
            <img src={icon1} alt='' width={16} height={16} />
          </li>
          <li>
            <img src={icon2} alt='' width={16} height={16} />
          </li>
        </ul>
        <button className='text-sm bg-[#1d2130] rounded-lg py-2 px-3 group mt-4 md:mt-0'>
          <img
            alt=''
            src={reload}
            width={20}
            height={20}
            className='inline-block mr-2 align-top group-hover:rotate-180 translate-all duration-200'
          />
          Reload
        </button>
      </div>
    </div>
  )
}
