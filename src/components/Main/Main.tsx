import Chart from '../Chart'
import MainBottom from './MainBottom'
import MainTop from './MainTop'

type Props = {}

export default function Main({}: Props) {
  return (
    <div className='lg:w-1/2 md:border-l md:border-r border-gray-700 pt-7 md:px-5'>
      <MainTop />
      <Chart />
      <MainBottom />
    </div>
  )
}
