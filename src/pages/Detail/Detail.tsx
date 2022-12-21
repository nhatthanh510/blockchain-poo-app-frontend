import HotPair from '@/components/HotPair'
import LeftCol from '@/components/LeftCol'
import Main from '@/components/Main'
import RightCol from '@/components/RightCol'

const Detail = () => {
  return (
    <div className='container mx-auto px-4'>
      <HotPair />
      <div className='lg:flex gap-5'>
        <LeftCol />
        <Main />
        <RightCol />
      </div>
    </div>
  )
}

export default Detail
