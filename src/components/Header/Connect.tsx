import { formatAddress } from '@/services/frontend'
import React from 'react'

type Props = {}

export default function Connect({}: Props) {
  return (
    <>
      <button className='btn px-8 py-2 rounded text-sm'>Connect Wallet</button>
      <span className='bg-[#20262f] rounded py-2 text-sm px-8 text-white'>
        {formatAddress('0x6509asdasdasdasd25c6ce')}
      </span>
    </>
  )
}
