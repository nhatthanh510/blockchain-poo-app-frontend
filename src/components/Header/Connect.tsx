import { formatAddress } from '@/services/frontend'
import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'

type Props = {}

export default function Connect({}: Props) {
  return (
    <>
      {/* <button className='btn px-4 md:px-8 py-2 rounded text-sm'>
        Connect Wallet
      </button> */}
      <span className='bg-[#20262f] rounded py-2 text-sm px-8 relative group cursor-pointer'>
        {formatAddress('0x6509asdasdasdasd25c6ce')}
        <button className='hidden   absolute top-full left-0 w-full group-hover:block'>
          <span className='bg-[#20262f] py-2 text-sm px-8 rounded flex gap-1 mt-2 items-center'>
            <AiOutlineLogout className='text-base' /> Disconnect
          </span>
        </button>
      </span>
    </>
  )
}
