import HotPair from '@/components/HotPair'
import LeftCol from '@/components/LeftCol'
import Main from '@/components/Main'
import RightCol from '@/components/RightCol'

const Home = () => {
  return (
    <div className='container mx-auto  '>
      <HotPair />
      <div className='flex gap-5'>
        <LeftCol />
        <Main />
        <RightCol />
      </div>
    </div>
  )
}

export default Home
