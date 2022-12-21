import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

type Props = {}

export default function Result({}: Props) {
  return (
    <div className='mt-4 font-normal p-4'>
      <p className='text-right text-gradient text-sm'>
        <button>Restore Hidden</button>
      </p>
      <p className='flex justify-between text-gradient text-sm mt-1'>
        <button>Track another wallet</button>
        <button>Load new tokens</button>
      </p>
      <table className='result-table'>
        <thead>
          <tr>
            <th>Tokens</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                WBNB <span className='text-green-500 text-sm'>$246.6555</span>
              </p>
              <p>WBNB</p>
            </td>
            <td>
              <p>0.00</p>
              <p>$0.00</p>
            </td>
            <td>
              <button className='hover:text-yellow-500'>
                <AiFillStar className='text-yellow-500' />
                {/* <AiOutlineStar /> */}
              </button>
              <button>
                <BsTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
