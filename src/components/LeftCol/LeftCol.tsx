import React from 'react'
import { Link } from 'react-router-dom'
import bannerBot from '@/assets/images/banner-bot.jpg'

type Props = {}

export default function LeftCol({}: Props) {
  return (
    <div className='lg:w-1/4  pt-7 pb-7 lg:border-r border-gray-700'>
      <div className='pb-6 border-gray-700 border-b '>
        <p className='uppercase text-gray-500'>Total Supply</p>
        <p className='text-lg mt-1'>1.000.000.000</p>
      </div>
      <div className='pt-7 pb-6 border-gray-700 border-b '>
        <p className='uppercase text-gray-500'>
          Market Cap{' '}
          <span className='text-xs'>(Includes locked, excludes burned)</span>
        </p>
        <p className='text-lg mt-1 text-green-500'>$2.340.000</p>
      </div>
      <div className='py-4 lg:pr-4'>
        <div className='bg-[#202531] rounded-sm p-3 text-sm mt-[10px]'>
          <p>
            <span className='text-gradient'>Pc v2</span> | DGZ/BNB LP Holdings:
          </p>
          <p className='mt-1'>
            169.04 BNB <span className='text-green-600'>($46,130)</span> |{' '}
            <Link className='text-gradient font-bold' to='/'>
              Chart
            </Link>
            <span className='text-black inline-block mx-2'>|</span>
            <Link className='text-gradient font-bold' to='/'>
              Holders
            </Link>
          </p>
        </div>
        <div className='bg-[#202531] rounded-sm p-3 text-sm mt-[10px]'>
          <p className='uppercase'>DGZ Transactions</p>
        </div>
        <div className='bg-gradient rounded-sm p-3 text-sm mt-[10px]'>
          <p className='uppercase'>DGZ Transactions</p>
        </div>
      </div>
      <Link to='/'>
        <img
          src={bannerBot}
          alt='Banner'
          className='max-w-[300px] w-full mx-auto mt-4 lg:mt-7 lg:pr-4'
        />
      </Link>
    </div>
  )
}
