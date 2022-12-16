import React from 'react'
import chart from '@/assets/images/chart.jpg'

type Props = {}

export default function Chart({}: Props) {
  return (
    <div className='mt-5'>
      <img src={chart} alt='' className='w-full' />
    </div>
  )
}
