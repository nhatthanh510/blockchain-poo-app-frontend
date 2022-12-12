import React from 'react'
import HeaderBanner from './HeaderBanner'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import social from '@/assets/images/social.png'
import Select from 'react-select'
import { formatAddress } from '@/services/frontend'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default function Header() {
  return (
    <div>
      <HeaderBanner />
      <div className='p-3 container mx-auto'>
        <Link to='/' className='float-left'>
          <img src={logo} alt='Logo' width={143} height={35} />
        </Link>
        <div className='w-2/3 flex justify-between float-right items-center'>
          <ul className='flex gap-[10px]'>
            <li>
              <Link to='https:google.com' target='_blank'>
                <span className='w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white text-sm pt-1'>
                  <BsTwitter className='mx-auto' />
                </span>
              </Link>
            </li>
            <li>
              <Link to='https:google.com' target='_blank'>
                <span className='w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white text-sm pt-1'>
                  <FaTelegramPlane className='mx-auto' />
                </span>
              </Link>
            </li>
            <li>
              <Link to='https:google.com' target='_blank'>
                <span className='w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white pt-1'>
                  <img
                    src={social}
                    width={16}
                    height={9}
                    className='mx-auto mt-0.5'
                    alt=''
                  />
                </span>
              </Link>
            </li>
          </ul>
          <div className='flex gap-[10px] items-center'>
            <Select options={options} />
            <button className='btn btn-sm'>Connect Wallet</button>
            <span className='bg-[#20262f] rounded py-2 text-sm px-8 text-white'>
              {formatAddress('0x6509asdasdasdasd25c6ce')}
            </span>
          </div>
        </div>
      </div>
      <div className='clear-both' />
    </div>
  )
}
