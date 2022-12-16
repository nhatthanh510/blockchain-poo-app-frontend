import React from 'react'
import swap from '@/assets/images/swap.png'
import { AiOutlineStar } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

type Props = {}

export default function RightCol({}: Props) {
  return (
    <div className='w-1/4'>
      <div className='bg-[#494747] rounded-lg px-4 py-7 text-xs'>
        <div>
          <p>Slippage</p>
          <div className='flex mt-3 bg-[#1A1D27] rounded-lg'>
            <input
              type='text'
              placeholder='0.5%'
              className='w-full py-3 px-4 bg-transparent outline-none'
            />
            <button className='py-3 px-6 bg-green-500 rounded-lg whitespace-nowrap'>
              Auto Slip
            </button>
          </div>
        </div>
        <div className='mt-5'>
          <p className='flex justify-between'>
            <span className='font-bold'>From (BNB)</span>
            <span>Balance:0</span>
          </p>
          <div className='flex mt-3 bg-[#1A1D27] rounded-lg'>
            <input
              type='text'
              className='w-full py-3 px-4 bg-transparent outline-none'
            />
            <button className='py-3 px-6 text-gradient whitespace-nowrap'>
              Max
            </button>
          </div>
        </div>
        <div>
          <img
            src={swap}
            alt=''
            className='mx-auto mt-3'
            width={18}
            height={18}
          />
        </div>
        <div className='mt-1'>
          <p className='flex justify-between'>
            <span className='font-bold'>To (MTT)</span>
            <span>Balance:0</span>
          </p>
          <div className='mt-3 bg-[#1A1D27] rounded-lg'>
            <input
              type='text'
              className='w-full py-3 px-4 bg-transparent outline-none'
            />
          </div>
        </div>
        <div className='mt-6'>
          <button className='btn w-full rounded-full py-3 text-sm'>Swap</button>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-gradient font-bold text-base uppercase px-4'>
          Your Wallet
        </h2>
        <p className='mt-4 px-4'>Estimated Wallet Balance</p>
        <table className='wallet-table'>
          <thead>
            <tr>
              <th>Tokens</th>
              <th>Balance</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>BNB</p>
                <p>Binance Smart Chain</p>
              </td>
              <td>
                <p>1,251,200,000</p>
                <p className='text-green-500'>$1,258</p>
              </td>
              <td className='flex gap-2 text-base text-gray-300'>
                <button>
                  <AiOutlineStar />
                </button>
                <button>
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>BNB</p>
                <p>Binance Smart Chain</p>
              </td>
              <td>
                <p>1,251,200,000</p>
                <p className='text-green-500'>$1,258</p>
              </td>
              <td className='flex gap-2 text-base text-gray-300'>
                <button>
                  <AiOutlineStar />
                </button>
                <button>
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>BNB</p>
                <p>Binance Smart Chain</p>
              </td>
              <td>
                <p>1,251,200,000</p>
                <p className='text-green-500'>$1,258</p>
              </td>
              <td className='flex gap-2 text-base text-gray-300'>
                <button>
                  <AiOutlineStar />
                </button>
                <button>
                  <BsTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
