import React from 'react'
import HeaderBanner from './HeaderBanner'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import SelectCurrency from './SelectCurrency'
import HeaderSocial from './HeaderSocial'
import Connect from './Connect'

export default function Header() {
  return (
    <div>
      <HeaderBanner />
      <div className='p-3 container mx-auto'>
        <Link to='/' className='float-left w-1/4'>
          <img src={logo} alt='Logo' width={143} height={35} />
        </Link>
        <div className='w-3/4 flex justify-between float-right items-center'>
          <HeaderSocial />
          <div className='flex gap-[10px] items-center'>
            <SelectCurrency />
            <Connect />
          </div>
        </div>
      </div>
      <div className='clear-both' />
    </div>
  )
}
