import Chart from '../Chart'
import MainBottom from './MainBottom'
import MainTop from './MainTop'

type Props = {}

export default function Main({}: Props) {
  return (
    <div className='w-1/2 border-l border-r border-gray-700 pt-7 px-5'>
      <MainTop />
      <Chart />
      <MainBottom />
    </div>
  )
}
