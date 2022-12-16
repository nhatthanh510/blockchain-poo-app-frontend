import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import social from '@/assets/images/social.png'

type Props = {}

export default function HeaderSocial({}: Props) {
  return (
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
  )
}
