import currency from '@/assets/images/currency.png'
import Select from 'react-select'

type OptionType = {
  value: string
  label: JSX.Element
}

const options: OptionType[] = [
  { value: 'a', label: <img src={currency} width={23} height={23} /> },
  { value: 'b', label: <img src={currency} width={23} height={23} /> },
  { value: 'c', label: <img src={currency} width={23} height={23} /> },
]

export default function SelectCurrency() {
  return (
    <Select
      className='currency react-select-container'
      classNamePrefix='react-select'
      options={options}
      defaultValue={options[0]}
      onChange={(item: any) => {
        console.log(item)
      }}
    />
  )
}
