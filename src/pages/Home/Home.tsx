import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='error-page'>
      <Link to={`dashboard/1`}>Your Name</Link>
      <h1 className='text-red-500 text-4xl'>Home page!</h1>
    </div>
  )
}

export default Home
