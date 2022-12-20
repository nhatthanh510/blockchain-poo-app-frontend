import React from 'react'
import { BsSearch } from 'react-icons/bs'
import icon1 from '@/assets/images/icon-1.png'
import icon2 from '@/assets/images/icon-2.png'
import reload from '@/assets/images/reload.png'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const SelectOption = () => (
  <div className='text-sm p-3'>
    <Link to='/test'>
      <p className='uppercase'>METALAND TOKEN (LAND)</p>
      <p className='text-[10px] text-gray-500'>
        0xB27ADAfFB9fEa1801459a1a81B17218288c097cc
      </p>
      <p className='uppercase text-right'>
        LP: 169.04 BNB <span className='text-green-600'>($46,130)</span>
      </p>
    </Link>
  </div>
)

const options = [
  {
    value: 'METALAND TOKEN (LAND) 0xB27ADAfFB9fEa1801459a1a81B17218288c097cc',
    label: <SelectOption />,
  },
  { value: 'token', label: <SelectOption /> },
  { value: 'vanilla', label: <SelectOption /> },
]

export default function MainTop() {
  return (
    <div className='md:flex justify-between'>
      <div className=''>
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
        <div className='flex gap-[10px] mt-4'>
          <Select
            options={options}
            className='main-search react-select-container'
            classNamePrefix='react-select'
            menuIsOpen
          />
          <button className='btn py-2 px-4 rounded-sm'>
            <BsSearch />
          </button>
        </div>
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
