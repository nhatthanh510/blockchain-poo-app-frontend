import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import Select from 'react-select'

const SelectOption = () => (
  <div className='text-sm p-3'>
    <p className='uppercase'>METALAND TOKEN (LAND)</p>
    <p className='text-[10px] text-gray-500'>
      0xB27ADAfFB9fEa1801459a1a81B17218288c097cc
    </p>
    <p className='uppercase text-right'>
      LP: 169.04 BNB <span className='text-green-600'>($46,130)</span>
    </p>
  </div>
)

const options = [
  {
    value: 'METALAND TOKEN (LAND) 0xB27ADAfFB9fEa1801459a1a81B17218288c097cc',
    label: <SelectOption />,
    url: '/test1',
  },
  { value: 'token', label: <SelectOption />, url: '/test2' },
  { value: 'vanilla', label: <SelectOption />, url: '/test3' },
]

export default function SearchBar() {
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    navigate(e.url)
  }

  return (
    <Select
      options={options}
      className='main-search react-select-container'
      classNamePrefix='react-select'
      onChange={handleChange}
    />
  )
}
